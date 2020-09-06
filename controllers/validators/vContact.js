const { body } = require("express-validator");

module.exports.vContact = [
	body("email")
		.trim()
		.isEmail()
		.withMessage("Please enter a valid e-mail")
		.bail()
		.normalizeEmail()
		.isLength({ min: 3, max: 256 })
		.withMessage("Please enter a valid e-mail"),
	body("title").trim().isLength({ max: 256 }).withMessage("Object has a 256 characters limit"),
	body("content").trim().isLength({ max: 4056 }).withMessage("Message has a 4056 characters limit")
];
