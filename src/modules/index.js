import {makeExecutableSchema} from "@graphql-tools/schema"
import TypeModule from "./types/index.js"
import AuthModule from "./auth/index.js";
import UserModule from "./user/index.js";
export default makeExecutableSchema({
    typeDefs: [
        TypeModule.schema,
        AuthModule.schema,
        UserModule.schema
    ],
    resolvers: [
        TypeModule.resolver,
        AuthModule.resolver,
        UserModule.resolver
    ]
})