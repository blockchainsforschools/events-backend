const router = require("express").Router();
const { Posts } = require("../../database/models/posts");

router.post("/", async (req, res) => {
	const { title, content } = req.body;
	const allFieldsProvided = title && content;

	if (!allFieldsProvided) {
		throw new RefusalError(
			"Not all required POST body information was provided.",
			"INCOMPLETE_BODY"
		);
	}

	const post = await Posts.create({
		title,
		content
	});

	res.status(201).json({
		success: true,
		payload: post
	});
});

module.exports = router;
