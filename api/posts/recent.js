const router = require("express").Router();
const { Posts } = require("../../database/models");

router.get("/", async (req, res) => {
	const posts = await Posts.findAll({
		order: [["created_at", "DESC"]]
	});

	res.json({
		success: true,
		payload: posts
	});
});

module.exports = router;
