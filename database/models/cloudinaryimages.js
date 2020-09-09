"use strict";
module.exports = (sequelize, DataTypes) => {
	const cloudinaryImages = sequelize.define(
		"cloudinaryImages",
		{
			publicId: DataTypes.STRING,
			width: DataTypes.INTEGER,
			height: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			mimetype: DataTypes.STRING
		},
		{}
	);
	cloudinaryImages.associate = function (models) {
		// associations can be defined here

		cloudinaryImages.belongsToMany(models.events, {
			through: models.eventImages,
			foreignKey: "imageId"
		});
	};
	return cloudinaryImages;
};
