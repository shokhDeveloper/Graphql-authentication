import jwt from "jsonwebtoken";
import { tokenConfig } from "#config";
export const launchToken = {
    createToken: (payload) => {
        try{
           return jwt.sign(payload, tokenConfig.BECKEND_KEY, {expiresIn: tokenConfig.tokenExpiresIn})
        }catch(error){
            console.log(error)
        }
    },
    parsedToken: (token) => {
        try{
            return jwt.verify(token, tokenConfig.BECKEND_KEY)
        }catch(error){
            console.log(error)
        }
    }
}