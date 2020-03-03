'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    description: DataTypes.STRING,
    streetaddress: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};