const router = require("express").Router();
const {Locations} = require("./../../database/models");

router.get("/", async (req, res) => {
	const query = req.query.q || "";

	// TODO Let's add a querying functionality here
	const locations = await Locations.findAll();

	if (locations) {
		return res.json({
			success: true,
			payload: locations
		});
	}

	return res.json({
		success: false,
		error: "location_get_all_error",
		errorMessage: "Locations could not be retrieved. Please try again."
	});
});

module.exports = router;
