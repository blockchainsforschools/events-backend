const { gql } = require("apollo-server-express");

module.exports = gql`
	type Image {
		id: Int!
		publicId: String!
		width: Int
		height: Int
		description: String
		mimetype: String

		# This is generated on the fly
		defaultUrl: String
	}
`;
