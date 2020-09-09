import { gql } from "apollo-server-express";

const Event = gql`
    # Date is a custom type that will be resolved through the GraphQLDate object.
	scalar Date
    # DB Fields
	type Event {
		name: String!
		eventURL: String!
		startTime: Date!
		endTime: Date!
		imgUrl: String!
	}
`;

export default Event;