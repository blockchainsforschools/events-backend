const router = require("express").Router();
const {
  Events,
  Sequelize,
  Tags,
  EventLocations,
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
        model: EventLocations,
      },
    ],
  });

  res.json({
    success: true,
    payload: events,
  });
});

module.exports = router;
