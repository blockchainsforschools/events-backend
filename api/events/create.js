const router = require("express").Router();
const {Tags, Events} = require("./../../database/models");

router.post("/create", async (req, res) => {

	// TODO add checks to make sure all the POST information is included / valid
	const event = await Events.create({
		name: req.body.name,
		url: req.body.url,
		locationId: req.body.locationId,
		startTime: new Date(req.body.startTime),
		endTime: new Date(req.body.endTime),
		// tags: req.body.tags
	});

	// TODO tags need to be added separately after the event object is created
	// You can get the id of the event currently created using event.id


	// TODO check here isn't necessary
	if (event) {
		return res.json({
			success: true,
			payload: event
		});
	}

	return res.json({
		success: false,
		error: "event_creation_error",
		errorMessage: "Event could not be created. Please try again."
	});
});

module.exports = router;
