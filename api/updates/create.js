const router = require("express").Router({ mergeParams: true });
const { Updates } = require("../../database/models/updates");
const RefusalError = require("./../../utils/refusalerror");

router.post("/", async (req, res) => {
	// gets the necessary data from request body to create an update
	const { userID, eventID, title, content } = req.body;
	const allFieldsProvided = userID && eventID && title && content;
	if (!allFieldsProvided) {
		throw new RefusalError(
			"Not all required POST body information was provided.",
			"INCOMPLETE_BODY"
		);
	}

	const update = await Updates.create({
		userID,
		eventID,
		title,
		content
	});

	res.json({
		success: true,
		payload: update
	});
});

module.exports = router;
