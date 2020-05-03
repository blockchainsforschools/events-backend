"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert("Locations", [
			{
				id: -1,
				name: "Stuyvesant High School",
				address: "345 Chambers Street",
				zip: 10282,
				city: "New York",
				state: "NY",
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete("Locations", null, {
			where: {
				id: -1
			}
		});
	}
};
