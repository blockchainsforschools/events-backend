import { gql } from "apollo-server-express";

const Location = gql`
	type Location {
        # DB Fields
		name: String!
		address: String!
		zip: Int!
		city: String!
		state: String!
	}
`;

export default Location;