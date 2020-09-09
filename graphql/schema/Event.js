const { gql } = require("apollo-server-express");

module.exports = gql`
	type Event {
		id: Int!
		name: String
		url: String
		start: DateTime
		end: DateTime

		# Properties that need custom resolvers
		images: [Image]
		defaultImage: Image
		location: Location
	}
`;

export default Event;
