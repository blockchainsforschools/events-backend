const router = require("express").Router();

router.use("/locations", require("./locations"));

module.exports = router;
