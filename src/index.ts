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
        context: async () => ({
            data: 'VALUE'
        })
    });
    
    console.log(`Server started at: ${url}`);    
})();