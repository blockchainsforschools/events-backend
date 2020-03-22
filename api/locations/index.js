const router = require("express").Router();

router.use("/query", require("./query"));
router.use("/create", require("./create"));

module.exports = router;
