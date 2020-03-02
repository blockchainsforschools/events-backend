const router = require("express").Router();

router.get("/", (req, res) => {

	// Handle the user logging out
	res.json({
		success: true
	});

});

module.exports = router;
