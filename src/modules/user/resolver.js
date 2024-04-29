import { getData, toCheckToken } from "#utils"

export default {
    Query: {
        users: (_, args, context) => {
            try {
                const isValidToken = toCheckToken(context.req.headers.token, context.req);
                if (isValidToken) {
                    const users = getData("users");
                    return users;
                } else {
                    throw {
                        status: 401,
                        message: "Token is invalid"
                    };
                }
            } catch (error) {
                return {
                    status: error.status || 500,
                    message: error.message
                };
            }
        }
    }
}
