import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "https://monefy.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "wkUiOf4NqSRT380XC5g0xRij3tUpnh4T6AwIfu22fv8B64xQPKJWHISnISJRFbVy"
    }
  });

  export default client