import Cors from "cors";
import { ApolloServer } from "apollo-server-micro";
import { verify } from "jsonwebtoken";

import { typeDefs, resolvers } from "../../schema";
import db from "../../models";

const initMiddleware = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    await cors(req, res);

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
      currentUserId: user?.id,
    };
  },
  introspection: true,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
