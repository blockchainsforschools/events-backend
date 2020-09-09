"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("updates", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			submittingUserId: {
				type: Sequelize.STRING
			},
			eventId: {
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			content: {
				type: Sequelize.TEXT
			},
			showHome: {
				type: Sequelize.BOOLEAN
			},
			pinned: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("updates");
	}
};
