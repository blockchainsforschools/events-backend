import { gql } from 'apollo-server-express';

const User = gql`
    type User {
        # DB Fields
        firstName: String!,
        lastName: String!,
        email: String!
        password: String
        emailVerified: Boolean!
        adminPrivleges: Integer!
    }
`;

export default User;