const router = require("express").Router();
const RefusalError = require("./../utils/refusalerror");

router.use(require("./cors"));
router.use("/auth", require("./auth"));
router.use("/events", require("./events"));
router.use("/locations", require("./locations"));
router.use("/posts", require("./posts"));
router.use("/updates", require("./updates"));
// Custom error handler for /api route
router.use((err, req, res, next) => {
	if (err instanceof RefusalError) {
		// This isn't a server error
		// We are simply refusing to process the client's request
		res.status(403).json({
			success: false,
			error: {
				code: err.code,
				message: err.message
			}
		});
	} else {
		// Something went wrong with the server
		// Log it so we can review it
		console.error(err.stack);

		// Tell the client we don't know what happened
		res.status(500).json({
			success: false,
			error: {
				code: "SERVER_ERROR",
				message:
					"There was an unexpected error processing that request. Let us know if this continues."
			}
		});
	}
});

module.exports = router;
