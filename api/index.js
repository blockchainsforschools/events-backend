const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/events", require("./events"));
router.use("/locations", require("./locations"))

// Custom error handler for /api route
router.use((err, req, res, next) => {
	console.error(err.stack);

	res.status(500).json({
		success: false,
		error: "server_error",
		errorMessage: "There was an unexpected error processing that request. Let us know if this continues."
	});
});

module.exports = router;
