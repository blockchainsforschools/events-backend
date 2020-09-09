import { gql } from 'apollo-server-express';

const Post = gql`
    type Post {
        # DB Fields
        title: String!
        content: String!
    }
`;

export default Post;