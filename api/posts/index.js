const router = require("express").Router();

router.use("/recent", require("./recent"));
router.use("/create", require("./create"));

module.exports = router;
