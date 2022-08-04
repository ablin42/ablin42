const express = require("express");
const router = express.Router();
const { vContact } = require("./validators/vContact");
const rateLimit = require("express-rate-limit");
const MongoStore = require("rate-limit-mongo");

const mailer = require("./helpers/mailer");
require("dotenv").config();
const utils = require("./helpers/utils");
const blacklist = require("../../blacklist.json");

const limiter = rateLimit({
	store: new MongoStore({
		uri: process.env.DB_CONNECTION,
		collectionName: "contactRateLimit",
		expireTimeMs: 7 * 24 * 60 * 60 * 1000
	}),
	windowMs: 7 * 24 * 60 * 60 * 1000,
	max: 2,
	handler: function (req, res) {
		res.status(200).json({ error: true, message: "Too many requests, please try again later" });
	}
});

// Send us a mail
router.post("/", limiter, vContact, async (req, res) => {
	try {
		const subject = `Contact mail received FROM [${req.body.email}] - ${req.body.title}`;
		const content = req.body.content;
		await utils.checkValidity(req);

		if (blacklist.some(item => content.includes(item))) throw new Error("Spam detected");
		if (await mailer(process.env.EMAIL, subject, content)) throw new Error("An error occured while sending the mail");

		return res.status(200).json({ error: false, message: "Your mail has been sent, I will reply as soon as possible!" });
	} catch (err) {
		console.log("ERROR CONTACT:", err, req.headers, req.ipAddress);
		return res.status(200).json({ error: true, message: err.message });
	}
});

module.exports = router;
