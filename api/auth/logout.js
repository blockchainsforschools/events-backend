const router = require("express").Router();

router.get("/", (req, res) => {
	req.session.destroy();

	// Handle the user logging out
	res.json({
		success: true
	});
});

module.exports = router;
