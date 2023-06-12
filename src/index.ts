import "./typeorm/data-source";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers, typeDefs } from "./graphql";

(async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => ({
            token: req.headers.authorization,
        }),
    });

    console.log(`Server started at: ${url}`);
})();