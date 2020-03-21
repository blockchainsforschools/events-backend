const router = require("express").Router();
const { Event: Events } = require("../../database/models/events");

router.get("/", async (req, res) => {
  const findEvents = await Events.findAll();
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
});

module.exports = router;
