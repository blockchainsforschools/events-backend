const router = require("express").Router();
const { Updates } = require("../../database/models/updates");

router.get("/:userID", async (req, res) => {
	const requestUpdateID = req.params.userID;
	let update;
	if (userID) {
		update = await Updates.findOne({
			where: {
				id: requestUpdateID
			}
		});
	} else {
		update = await Updates.findAll({
			order: [["createdAt", "DESC"]],
			limit: 10
		});
	}
	res.json({
		success: true,
		payload: update
	});
});
