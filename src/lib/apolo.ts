import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oy5pw81mbw01w7dhlhe2io/master",
  cache: new InMemoryCache(),
});
