const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const flash = require("express-flash");
const sanitize = require("mongo-sanitize");
const path = require("path");
require("dotenv").config();

// Express
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("trust proxy", 1);

//-- Express Session --//
app.use(
	session({
		/*store: new MongoStore({
			mongooseConnection: mongoose.connection,
			ttl: 365 * 24 * 60 * 60
		}),*/
		name: "ablin42",
		secret: process.env.SESSION_SECRET,
		resave: true,
		//proxy: true,
		saveUninitialized: true,
		cookie: {
			path: "/",
			maxAge: 14 * 24 * 60 * 60 * 1000,
			httpOnly: false,
			secure: false
		} //secure = true (or auto) requires https else it wont work
		//sameSite: "Lax",
	})
);

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
				"kit.fontawesome.com",
				"'sha256-wmvdIZ8AQnfxezFjZzOoK61DdXjE3og3XT5W0D4W0V4='"
			],
			frameSrc: [],
			imgSrc: ["'self'"]
		},
		reportOnly: false
	})
);

//app.use(cors());
app.use(flash());

app.post("/report-violation", (req, res) => {
	if (req.body) {
		console.log("CSP Violation: ", req.ip, req.body);
	} else {
		console.log("CSP Violation: No data received!", req.ip);
	}

	res.status(204).end();
});

app.get("/", (req, res) => {
	return res.status(200).render("index");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));
