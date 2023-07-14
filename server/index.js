import { startApolloServer } from "./app.js"
import {typeDefs} from './graphql/typeDefs.js'
import { resolver } from "./graphql/resolvers.js";

startApolloServer(typeDefs, resolver);