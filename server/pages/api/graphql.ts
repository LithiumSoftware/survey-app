import { ApolloServer } from "apollo-server-micro";
import { verify } from "jsonwebtoken";

import { typeDefs, resolvers } from "../../schema";
import db from "../../models";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    let user;
    try {
      const token = req?.cookies?.token || "";
      const maliciousToken = req?.headers["malicious-token"];
      if (token === maliciousToken) throw null;
      user = await (token ? verify(token, "supersecret") : undefined);
    } catch (err) {
      console.log("Error fetching user: ", err);
    }

    return {
      db,
      req,
      res,
      currentUserId: user?.user?.id,
    };
  },
  introspection: true,
  playground: true,
  // cors: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
