"use strict";
module.exports = (sequelize, DataTypes) => {
	const Tags = sequelize.define(
		"Tags",
		{
			eventID: DataTypes.INTEGER,
			tag: DataTypes.STRING
		},
		{}
	);
	Tags.associate = function (models) {
		// associations can be defined here
		Tags.belongsTo(models.Events, {
			foreignKey: "eventID",
			targetKey: "id"
		});
	};
	return Tags;
};
