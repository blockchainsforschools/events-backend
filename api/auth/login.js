const router = require("express").Router();
const bcrypt = require("bcrypt");
const {Users} = require("../../database/models");

router.post("/", async (req, res) => {
	const findUser = await Users.findOne({
		where: {
			email: req.body.email
		}
	});

	if (findUser) {
		const success = await bcrypt.compare(req.body.password, findUser.password);

		if (success) {
			return res.json({
				success: true
			});
		}
	}

	return res.json({
		success: false,
		error: "invalid_credentials",
		errorMessage: "The credentials provided are invalid. Please try again."
	});
});

module.exports = router;
