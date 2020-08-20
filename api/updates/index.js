const router = require("express").Router();
router.use("/create/:userID", require("./create"));
router.use("/", require("./retrieve"));
module.exports = router;
