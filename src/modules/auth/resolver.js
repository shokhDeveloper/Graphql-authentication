import sha256 from "sha256";
import { getData, toCheckUser, writeData } from "#utils"
import { launchToken } from "#jwt";
export default {
    Mutation:{
        register: (_, {user}, {userAgent}) => {
            try{
                const users = getData("users");
                const type = toCheckUser(user, "register");
                if(type){
                    const newUser = {
                        ...user,
                        userId: users.length ? users[users.length-1].userId + 1: 1,
                        password: sha256(user.password)
                    }
                    users.push(newUser);
                    writeData("users", users)
                    return {
                        status: 201,
                        message: "The user successfully registred !",
                        data: newUser,
                        accessToken: launchToken.createToken({userId: newUser.userId, userAgent})
                    }
                }else throw {
                    status: 400,
                    message: "The user has already been created!"
                }
            }catch(error){
                return {
                    status: error.status || 500,
                    message: error.message
                }
            }
        },
        login: (_, {user}, {userAgent}) => {
            try{
                const loginType = toCheckUser(user, "login");
                if(loginType.type && loginType.data){
                    return {
                        status: 200,
                        message: "The user successfully logined !",
                        data: loginType.data,
                        accessToken: launchToken.createToken({userId: loginType.data.userId, userAgent })
                    }
                }else throw {
                    status: 400,
                    message: "The user is invalid !"
                }
            }catch(error){
                return {
                    status: error.status || 500,
                    message: error.message
                }
            }
        }
    }
}