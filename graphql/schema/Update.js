const { gql } = require("apollo-server-express");

module.exports = gql`
	type Update {
		id: Int!
		title: String
		content: String
		showHome: Boolean
		pinned: Boolean
		createdAt: DateTime
	}
`;
