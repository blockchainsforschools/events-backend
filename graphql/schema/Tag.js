const { gql } = require("apollo-server-express");

module.exports = gql`
	type Tag {
		name: String
		url: String
		description: String
	}
`;
