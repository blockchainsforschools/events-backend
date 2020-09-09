const { gql } = require("apollo-server-express");

module.exports = gql`
	type Location {
		id: Int!
		name: String
		address: String
		zip: Int
		city: String
		state: String
	}
`;
