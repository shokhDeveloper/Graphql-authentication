import { launchToken } from "#jwt";
import fs from "node:fs";
import path from "node:path";
const replaceEmailToGmail = (email) => {
    const emailType = email.includes("@email");
    const gmailType = email.includes("@gmail")
    return emailType ? email.replace("@email", "@gmail"): gmailType ? email.replace("@gmail", "@email"): false;
}
export const writeData = (fileName, data) => {
    try{
        fs.writeFileSync(path.join(process.cwd(), "db", fileName + ".json"), JSON.stringify(data, null, 4))
        return true;
    }catch(error){
        console.log(error)
    }
}
export const getData = (fileName) => {
    try{
        let file = fs.readFileSync(path.join(process.cwd(), "db", fileName + ".json"), "utf-8");
        file = file ? JSON.parse(file): []
        return file
    }catch(error){
        throw error
    }   
}
export const toCheckUser = (defUser, type) => {
    try{
        const users = getData("users");
        const condition = (user) => user.email == defUser.email || user.email == replaceEmailToGmail(defUser.email);
        // register;
        if(!(users.some(condition)) && type == "register") return true
        if(users.some(condition) && type == "register") return false

        // login;
        if(!(users.some(condition)) && type == "login") return {
            type: false,
            data: null
        }
        if(users.some(condition) && type == "login") return {
            type: true,
            data: users.find(condition)
        };
    }catch(error){
        console.log(error)
    }   
}
export const toCheckToken = (token, req) => {
    const users = getData("users");
    if (!token) {
        throw {
            status: 401,
            message: "Token not found"
        };
    }

    const { userId, userAgent } = launchToken.parsedToken(token);
    const user = users.find(user => user.userId === userId);

    if (!user || req.headers["user-agent"] !== userAgent) {
        throw {
            status: 401,
            message: "The token is invalid"
        };
    }

    return true;
};
