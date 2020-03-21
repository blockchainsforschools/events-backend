const router = require("express").Router();
const { Location: Locations } = require("../../database/models/locations");

router.get("/", async (req, res) => {});

router.post("/create", async (req, res) => {
  const location = await Locations.create({
    name: req.body.name,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    state: req.body.state
  });
});

module.exports = router;
