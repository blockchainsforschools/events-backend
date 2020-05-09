const router = require("express").Router();
const RefusalError = require("./../../utils/refusalerror");
const bcrypt = require("bcrypt");
const { Users } = require("../../database/models");

router.post("/", async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		throw new RefusalError(
			"Not all required POST body information was provided.",
			"INCOMPLETE_BODY"
		);
	}

	const findUser = await Users.findOne({
		where: {
			email: email
		}
	});

	if (findUser) {
		throw new RefusalError(
			"Account with provided email already exists.",
			"EXISTING_EMAIL"
		);
	}

	const hashed = await bcrypt.hash(password, 10);

	const user = await Users.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: hashed
	});

	return res.json({
		success: true,
		payload: user
	});
});

module.exports = router;
