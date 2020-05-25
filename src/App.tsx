import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: "http://192.168.1.2:3000/api/graphql", // Server URL (must be absolute)
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const MyApp = () => (
  <PaperProvider>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </NavigationContainer>
    </ApolloProvider>
  </PaperProvider>
);

export default MyApp;
