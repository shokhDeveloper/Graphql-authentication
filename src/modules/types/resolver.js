import { checkEmail, checkPassword } from "#validator"
import {GraphQLScalarType, Kind} from "graphql"
const emailScalar = new GraphQLScalarType({
    name: "Email",
    description: "Email validation",
    serialize: checkEmail,
    parseValue: checkEmail,
    parseLiteral: function(ast){
        if(ast.kind == Kind.STRING){
            return checkEmail(ast.value)
        }else throw new Error("Email value must String")
    }
})
const passwordScalar = new GraphQLScalarType({
    name: "Password",
    description: "Password validation",
    serialize: checkPassword,
    parseValue: checkPassword,
    parseLiteral: function(ast){
        if(ast.kind == Kind.STRING){
            return checkPassword(ast.value)
        }else throw new Error("Password value must String")
    }
})
export default {
    Password: passwordScalar,
    Email: emailScalar,
    Query: {
        user: () => "salom"
    },
    Gender: {
        male: "1",
        female: "2"
    }
}