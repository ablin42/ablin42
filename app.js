const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);
const csrf = require("csurf");
const expressSanitizer = require("express-sanitizer");
const sanitize = require("mongo-sanitize");
const path = require("path");
require("dotenv").config();

//Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	},
	err => {
		if (err) throw err;
		console.log("Connected to database");
	}
);

// Express
const app = express();

if (process.env.ENVIRONMENT === "local") app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("trust proxy", 1);

if (process.env.ENVIRONMENT === "prod")
	app.use(function (req, res, next) {
		console.log(req.headers.host);
		if (req.protocol == "http") return res.redirect("https://www." + req.headers.host + req.url);
		else return next();
	});

if (process.env.ENVIRONMENT === "prod")
	app.use(function (req, res, next) {
		console.log(req.headers.host);
		if (req.headers.host === "ablin42.herokuapp.com" || req.headers.host === "ablin.dev")
			return res.status(301).redirect("https://www." + process.env.HOST + req.url);
		else return next();
	});

//-- Express Session --//
app.use(
	session({
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			ttl: 365 * 24 * 60 * 60
		}),
		name: "ablin42",
		secret: process.env.SESSION_SECRET,
		resave: true,
		//proxy: true,
		saveUninitialized: false,
		cookie: {
			path: "/",
			maxAge: 14 * 24 * 60 * 60 * 1000,
			httpOnly: false,
			secure: false
		} //secure = true (or auto) requires https else it wont work
		//sameSite: "Lax",
	})
);

// Body-Parser
app.use(bodyParser.urlencoded({ extended: true, limit: 25000000 }));
app.use(
	bodyParser.json({
		limit: 25000000
	})
);
// BP Error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
		req.flash("warning", err.message);
		return res.status(403).redirect(req.headers.referer);
	}
	return res.status(200).json({ error: true, message: err.message });
});

//Helmet;
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));
app.use(
	helmet.contentSecurityPolicy({
		directives: {
			reportUri: "/report-violation",
			defaultSrc: ["'self'"],
			styleSrc: ["'self'", "stackpath.bootstrapcdn.com", "kit-free.fontawesome.com", "fonts.googleapis.com"],
			fontSrc: ["'self'", "fonts.googleapis.com", "kit-free.fontawesome.com", "fonts.gstatic.com"],
			scriptSrc: [
				"'self'",
				"kit.fontawesome.com",
				"stackpath.bootstrapcdn.com",
				"www.gstatic.com",
				"cdn.jsdelivr.net",
				"cdnjs.cloudflare.com",
				"stackpath.bootstrapcdn.com",
				"kit.fontawesome.com"
			],
			frameSrc: [],
			imgSrc: ["'self'"]
		},
		reportOnly: false
	})
);

app.use(csrf({ cookie: false }));

// Keep session
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});

// Sanitize body and query params
app.use((req, res, next) => {
	req.body = sanitize(req.body);
	req.query = sanitize(req.query);

	next();
});

app.use(expressSanitizer());

//app.use(cors());
app.use(flash());

app.post("/report-violation", (req, res) => {
	if (req.body) console.log("CSP Violation: ", req.ip, req.body);
	else console.log("CSP Violation: No data received!", req.ip);

	res.status(204).end();
});

const contactRoute = require("./controllers/contact");
app.use("/api/contact", contactRoute);

/* MAIN ROUTE */

app.get("/", (req, res) => {
	try {
		let obj = { csrfToken: req.csrfToken() };

		return res.status(200).render("index", obj);
	} catch (err) {
		console.log("HOME ROUTE ERROR:", err, req.headers, req.ipAddress);

		return res.status(200).send("bide");
	}
});

let port = process.env.PORT;
//if (process.env.ENVIRONMENT === "prod") port = "/tmp/nginx.socket";
app.listen(port, () => console.log(`Listening on port ${port}...`));
