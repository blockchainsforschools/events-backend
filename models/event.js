'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    eventURL: DataTypes.STRING,
    locationID: DataTypes.INTEGER,
    startTime: DataTypes.TEXT,
    endtime: DataTypes.TEXT,
    imgURL: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};