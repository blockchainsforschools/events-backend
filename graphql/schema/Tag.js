import { gql } from "apollo-server-express";

const Tag = gql`
	type Tag {
		#DB Fields
		eventID: Integer!
		tag: String!
	}
`;

export default Tag;
