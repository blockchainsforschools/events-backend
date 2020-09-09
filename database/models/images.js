"use strict";
module.exports = (sequelize, DataTypes) => {
	const images = sequelize.define(
		"images",
		{
			publicId: DataTypes.STRING,
			width: DataTypes.INTEGER,
			height: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			mimetype: DataTypes.STRING
		},
		{}
	);
	images.associate = function (models) {
		// associations can be defined here
		images.belongsToMany(models.events, { through: models.eventImages });
	};
	return images;
};
