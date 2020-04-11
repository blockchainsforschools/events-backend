const router = require("express").Router();
const {
	Events,
	Sequelize,
	Tags,
	Locations,
} = require("../../database/models");

const Op = Sequelize.Op;

router.get("/", async (req, res) => {

	const events = await Events.findAll({
		where: {
			endTime: {
				[Op.gt]: new Date(),
			},
		},
		include: [
			{
				model: Tags,
			},
			{
				model: Locations,
			},
		],
	});

	res.json({
		success: true,
		payload: events,
	});

});

module.exports = router;
