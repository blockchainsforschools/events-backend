'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventLocations = sequelize.define('EventLocations', {
    eventId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {});
  EventLocations.associate = function(models) {
    // associations can be defined here
  };
  return EventLocations;
};
