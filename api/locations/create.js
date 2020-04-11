const router = require("express").Router();
const {Locations} = require("../../database/models");

router.post("/", async (req, res) => {
	const location = await Locations.create({
		name: req.body.name,
		address: req.body.address,
		zip: req.body.zip,
		city: req.body.city,
		state: req.body.state,
	});


	return res.json({
		success: true,
		payload: location,
	});

});

module.exports = router;
