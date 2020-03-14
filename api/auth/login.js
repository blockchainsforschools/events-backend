const router = require("express").Router();
const bcrypt = require("bcrypt");
const {user} = require("../../database/models");

router.post("/", async (req, res) => {
	const findUser = await user.findOne({
		where: {
			email: req.body.email
		}
	});

	if(findUser){
		const success = await bcrypt.compare(req.body.password, findUser.password);

		if(success){
			return res.json({
				success: true
			});
		}
	}

	return res.json({
		success: false
	});

});

module.exports = router;
