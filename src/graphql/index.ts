import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const allTypeDefs = loadFilesSync(path.join(__dirname, 'typeDefs'), { extensions: ['gql'] });
const allResolvers = loadFilesSync(path.join(__dirname, 'resolvers'), { extensions: ['ts'] });

const typeDefs = mergeTypeDefs(allTypeDefs);
const resolvers = mergeResolvers(allResolvers);

export { typeDefs, resolvers };