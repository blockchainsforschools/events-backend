const router = require("express").Router();
const { Tags, Events, EventLocations } = require("./../../database/models");

router.post("/create", async (req, res) => {
  // TODO add checks to make sure all the POST information is included / valid
  const name = req.body.name;
  const url = req.body.url;
  const locationId = req.body.locationId;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const tags = req.body.tags;

  if (!(name && url && locationId && startTime && endTime && tags)) {
    // Checks the existence of each request body parameter
    return Promise.reject("Error: Not all POST information was included!"); // Is it valid to return a rejected Promise?
  } else if (
    // Checks the type validity of each request body parameter
    !(
      typeof name === "string" &&
      typeof url === "string" &&
      typeof locationId === "number" &&
      typeof startTime === "string" && // TODO are startTime and endTime of "string" type?
      typeof endTime === "string" &&
      typeof tags === "object"
    )
  ) {
    return Promise.reject("Error: Not all POST information are of valid type!"); // Is it valid to return a rejected Promise?
  }

  // Checks if the provided locationId exists
  EventLocations.count({ where: { locationId: locationId } }).then((count) => {
    if (count == 0) {
      return;
    }
  });

  // Checks if the provided eventURL is unique/already exists
  Events.count({ where: { eventURL: url } }).then((count) => {
    if (count != 0) {
      return;
    }
  });

  const event = await Events.create({
    name: req.body.name,
    url: req.body.url,
    locationId: req.body.locationId,
    startTime: new Date(req.body.startTime),
    endTime: new Date(req.body.endTime),
  });

  // TODO tags need to be added separately after the event object is created
  // You can get the id of the event currently created using event.id

  // Create tags provided by the request body tags parameter and store in the Tags db table
  for (let tag in req.body.tags) {
    const addedTag = await Tags.create({
      eventID: event.id,
      tag: tag,
    });
  }

  return res.json({
    success: true,
    payload: event,
  });

  // Is this error check necessary if there is an index.js checking for all /api routes?
  // return res.json({
  // 	success: false,
  // 	error: "event_creation_error",
  // 	errorMessage: "Event could not be created. Please try again."
  // });
});

module.exports = router;
