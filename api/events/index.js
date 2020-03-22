const router = require("express").Router();

router.use("/upcoming", require("./upcoming"));
router.use("/create", require("./create"));

module.exports = router;
