const router = require("express").Router();
const RefusalError = require("./../../utils/refusalerror");
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

			req.session.signedIn = true;
			req.session.userId = findUser.id;

			return res.json({
				success: true
			});
		}
	}

	throw new RefusalError("Those credentials are invalid. Please try again.", "INVALID_CREDENTIALS");
});

module.exports = router;
