import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from "@apollo/client";
import {
  WebSocketLink
} from "@apollo/client/link/ws";
import {
  getMainDefinition
} from "@apollo/client/utilities";

//const token = localStorage.getItem('auth0:id_token');
const userId = localStorage.getItem('auth0:id_token:sub');

const wsLink = new WebSocketLink({
  uri: "wss://monefy.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "wkUiOf4NqSRT380XC5g0xRij3tUpnh4T6AwIfu22fv8B64xQPKJWHISnISJRFbVy",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
        // "authorization": token ? `Bearer ${token}` : "",
      },
    },
  },
});


const httpLink = new HttpLink({
  uri: "https://monefy.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "wkUiOf4NqSRT380XC5g0xRij3tUpnh4T6AwIfu22fv8B64xQPKJWHISnISJRFbVy",
    "x-hasura-role": "user",
    "x-hasura-user-id": userId,
    // "authorization": token ? `Bearer ${token}` : "",
  },
});

const splitLink = split(
  ({
    query
  }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});


export default client;