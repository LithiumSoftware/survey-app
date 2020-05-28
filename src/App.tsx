import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Navigator from "./navigation/Navigator";

const link = new HttpLink({
  uri: "https://survey-app-server.now.sh/api/graphql", // Server URL (must be absolute),
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const MyApp = () => (
  <PaperProvider>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Navigator />
      </NavigationContainer>
    </ApolloProvider>
  </PaperProvider>
);

export default MyApp;
