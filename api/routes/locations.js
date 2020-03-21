const router = require("express").Router();
const {Location: Locations} = require("../../../database/models/locations");

router.get("/", LocationsController.locations_get_all);
router.post("/create", LocationsController.locations_create_location);

module.exports = router;