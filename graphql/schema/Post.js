const { gql } = require("apollo-server-express");

module.exports = gql`
	type Post {
		id: Int!
		title: String
		content: String
		createdAt: DateTime
	}
`;
