import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { setContext } from "apollo-link-context";
import { StatusBar, Platform, AsyncStorage } from "react-native";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import LoadingView from "./components/LoadingView";
import Navigator from "./navigation/Navigator";

const link = new HttpLink({
  uri: "http://survey-app-server.now.sh/api/graphql", // Server URL (must be absolute),
});

const MyApp = () => {
  const [loggedUserToken, setUserToken] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);
  let authLink = undefined;

  AsyncStorage.getItem("logged_in").then((data) => {
    setUserToken(data);
    setLoading(false);
  });

  if (Platform.OS === "web") {
    authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: loggedUserToken ? `${loggedUserToken}` : "",
        },
      };
    });
  }

  if (loading) return <LoadingView />;

  const client = new ApolloClient({
    link: authLink ? authLink.concat(link) : link,
    cache: new InMemoryCache(),
  });

  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Navigator
            loggedUser={!!loggedUserToken}
            setUserToken={setUserToken}
          />
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  );
};

export default MyApp;
