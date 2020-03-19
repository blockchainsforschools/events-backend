'use strict';
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define('Events', {
		name: DataTypes.STRING,
		eventURL: DataTypes.STRING,
		LocationsID: DataTypes.INTEGER,
		startTime: DataTypes.DATE,
		endtime: DataTypes.DATE,
		imgURL: DataTypes.STRING
	}, {});
	Events.associate = function (models) {
		// associations can be defined here
	};
	return Events;
};
