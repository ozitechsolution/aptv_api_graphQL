// pages/index.js
import { useQuery, gql } from '@apollo/client';

// Define your GraphQL query
const HELLO_QUERY = gql `
  query {
    hello
  }
`;

// Component to display data
const IndexPage = () => {
        const { loading, error, data } = useQuery(HELLO_QUERY);

        if (loading) return <p > Loading... < /p>;
        if (error) return <p > Error: ( < /p>;

            return <p > { data.hello } < /p>;
        };

        export default IndexPage;