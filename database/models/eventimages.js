"use strict";
module.exports = (sequelize, DataTypes) => {
	const eventImages = sequelize.define(
		"eventImages",
		{
			eventId: DataTypes.INTEGER,
			imageId: DataTypes.INTEGER,
			default: DataTypes.BOOLEAN
		},
		{}
	);
	eventImages.associate = function (models) {
		// associations can be defined here
		eventImages.belongsTo(models.cloudinaryImages, {
			foreignKey: "imageId"
		});

		eventImages.belongsTo(models.events);
	};
	return eventImages;
};
