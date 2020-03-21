const router = require("express").Router();
const {Event: Events} = require("../../../database/models/events");

router.get("/", EventsController.events_get_all);
router.post("/create", EventsController.events_create_event);

module.exports = router;