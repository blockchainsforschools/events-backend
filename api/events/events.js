const router = require("express").Router();
const { Events } = require("../../database/models/events");

router.get("/", async (req, res) => {
  const events = await Events.findAll({
    where: {
      endTime: { gt: new Date().now() }
    }
  });
  Events.associate(events);
});

router.post("/create", async (req, res) => {
  const event = await Events.create({
    name: req.body.name,
    url: req.body.url,
    locationId: req.body.locationId,
    startTime: new Date(req.body.startTime),
    endTime: new Date(req.body.endTime),
    tags: req.body.tags
  });

  if (event) {
    return res.json({
      success: true,
      payload: event
    });
  }

  return res.json({
    success: false,
    payload: None,
    error: "event_creation_error",
    errorMessage: "Event could not be created. Please try again."
  });
});

module.exports = router;
