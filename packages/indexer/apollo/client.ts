import { ApolloClient } from "@apollo/client";
import cache from "./cache";

const apolloClient = () => new ApolloClient({
  cache,
  connectToDevTools: true,
  // link: 
});

export default apolloClient;