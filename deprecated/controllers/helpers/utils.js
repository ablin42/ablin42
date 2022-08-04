const { validationResult } = require("express-validator");

module.exports = {
	checkValidity: async function (req) {
		const vResult = validationResult(req);
		if (!vResult.isEmpty()) {
			vResult.errors.forEach(item => {
				throw new Error(item.msg);
			});
		}

		return;
	}
};
