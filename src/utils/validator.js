const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;

export const checkEmail = (email) => {
    if(!(typeof email == "string")) throw new Error("Email value must String");
    if(!regexEmail.test(email)) throw new Error("Email is invalid !")
    return email
}

export const checkPassword = (password) => {
    if(!(typeof password == "string")) throw new Error("Password value must String");
    if(!regexPassword.test(password)) throw new Error("Password is invalid ! ") 
    return password
}