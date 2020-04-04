const router = require("express").Router();
const { Locations } = require("../../database/models");

router.post("/", async (req, res) => {
  const location = await Locations.create({
    name: req.body.name,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    state: req.body.state,
  });

  // TODO check here isn't necessary

  return res.json({
    success: true,
    payload: location,
  });

  // Is this error response necessary if there is an index.js checking for all /api routes?
  // return res.json({
  // 	success: false,
  // 	error: "location_creation_error",
  // 	errorMessage: "Location could not be created. Please try again."
  // });
});

module.exports = router;
