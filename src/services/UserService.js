import axios from 'axios';

// user signup api
export const signUp = (loginObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", loginObj);
    return response;
}

// user login api
export const login = (signUpObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", signUpObj);
    return response;
}