const router = require("express").Router();
const {Tags, Events, Locations, EventLocations} = require("./../../database/models");
const RefusalError = require("./../../utils/refusalerror");

router.post("/create", async (req, res) => {
	// TODO add checks to make sure all the POST information is included / valid
	const name = (req.body.name || "").trim();
	const eventURL = req.body.url || "";
	const startTime = new Date(req.body.startTime);
	const endTime = new Date(req.body.endTime);
	const locationID = req.body.locationID || "";
	const tags = req.body.tags;
	const imgURL = req.body.image;

	const validTypes = (
		startTime.getTime() &&
		endTime.getTime() &&
		Array.isArray(tags)
	);

	if (!validTypes) {
		throw new RefusalError("Not all POST information are of the valid type.", "INVALID_TYPES");
	}


	// Checks if the provided eventURL is unique/already exists
	// It'll return an integer which we can
	const eventUrlExists = await Events.count({where: {eventURL}});

	if (eventUrlExists) {
		throw new RefusalError("That url already belongs to another event", "URL_EXISTS");
	}

	const locationExists = await Locations.count({where: {id: locationID}});

	if (!locationExists) {
		throw new RefusalError("The location provided is not valid.", "INVALID_LOCATION");
	}

	const event = await Events.create({
		name,
		eventURL,
		imgURL,
		startTime,
		endTime
	});

	const eventID = event.id;

	await EventLocations.create({
		locationID,
		eventID
	})

	// Create tags provided by the request body tags parameter and store in the Tags db table
	for (let tag in req.body.tags) {

		await Tags.create({
			eventID,
			tag
		});

	}

	return res.json({
		success: true,
		payload: event,
	});

});

module.exports = router;
