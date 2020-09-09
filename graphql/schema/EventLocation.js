import { gql } from "apollo-server-express";

const EventLocation = gql`
	type EventLocation {
        # DB Fields
		eventId: Int!
		locationId: Int!
	}
`;

export default EventLocation;