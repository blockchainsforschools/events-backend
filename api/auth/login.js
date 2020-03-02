const router = require("express").Router();

router.post("/", (req, res) => {
	// do stuff
	// post-data can be accessed through req.body.<post-field-name>

	res.json({
		success: true
	});

});

module.exports = router;
