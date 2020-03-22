const router = require("express").Router();
const {Events, Sequelize} = require("../../database/models");

const Op = Sequelize.Op;

router.get("/", async (req, res) => {

	const events = await Events.findAll({
		where: {
			endTime: {
				[Op.gt]: new Date()
			}
		}
	});

	res.json({
		success: true,
		payload: events
	});


});


module.exports = router;
