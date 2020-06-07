const router = require("express").Router();
const { Locations, Sequelize } = require("./../../database/models");

router.get("/", async (req, res) => {
	const query = req.query.q || "";

	const queryWords = query.split(" ").filter(Boolean);

	const fields = ["name", "address", "zip", "city", "state"];

	const op = Sequelize.Op;

	// Create dynamic AND queries
	// Find rows where any field contains any of the words in the query
	const ANDConditions = queryWords.map((word) => {
		const wildcard = `%${word}%`;
		return {
			[op.or]: fields.map((field) => ({
				[field]: {
					[op.like]: wildcard
				}
			}))
		};
	});

	const locations = await Locations.findAll({
		where: {
			[op.and]: ANDConditions
		},
		limit: 10
	});

	return res.json({
		success: true,
		payload: locations
	});
});

module.exports = router;
