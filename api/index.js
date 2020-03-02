const router = require("express").Router();

router.use("/auth", require("./auth"));

// Custom error handler for /api route
router.use(require("./errors"));

module.exports = router;
