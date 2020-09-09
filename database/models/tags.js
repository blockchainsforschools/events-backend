"use strict";
module.exports = (sequelize, DataTypes) => {
	const tags = sequelize.define(
		"tags",
		{
			url: DataTypes.STRING,
			title: DataTypes.STRING,
			description: DataTypes.TEXT
		},
		{}
	);
	tags.associate = function (models) {
		// associations can be defined here
		tags.belongsToMany(models.events, { through: models.eventTags });
	};
	return tags;
};
