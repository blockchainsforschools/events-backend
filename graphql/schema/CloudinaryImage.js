const { gql } = require("apollo-server-express");

module.exports = gql`
	type CloudinaryImage {
		publicId: String!
		defaultUrl: String
		width: Int
		height: Int
	}
`;
