const router = require("express").Router();
const { Location: Locations } = require("../../database/models/locations");

router.get("/", async (req, res) => {
  const locations = await Locations.findAll();

  if (locations) {
    return res.json({
      success: true,
      payload: locations
    });
  }

  return res.json({
    success: false,
    payload: None,
    error: "location_get_all_error",
    errorMessage: "Locations could not be retrieved. Please try again."
  });
});

router.post("/create", async (req, res) => {
  const location = await Locations.create({
    name: req.body.name,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    state: req.body.state
  });

  if (location) {
    return res.json({
      success: true,
      payload: location
    });
  }

  return res.json({
    success: false,
    payload: None,
    error: "location_creation_error",
    errorMessage: "Location could not be created. Please try again."
  });
});

module.exports = router;
