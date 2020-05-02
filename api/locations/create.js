const router = require("express").Router();
const { Locations } = require("../../database/models");
const RefusalError = require("./../../utils/refusalerror");

router.post("/", async (req, res) => {
	const allFieldsProvided =
		req.body.name &&
		req.body.address &&
		req.body.zip &&
		req.body.city &&
		req.body.state;

	if (!allFieldsProvided) {
		throw new RefusalError(
			"Not all required POST body information was provided.",
			"INCOMPLETE_BODY"
		);
	}

	const location = await Locations.create({
		name: req.body.name,
		address: req.body.address,
		zip: req.body.zip,
		city: req.body.city,
		state: req.body.state
	});

	return res.json({
		success: true,
		payload: location
	});
});

module.exports = router;
