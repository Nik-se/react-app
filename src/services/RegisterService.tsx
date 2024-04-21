import axios from "axios";
import host from "./BaseService";

const BASE_URI = host + "api/quizz/";

export interface Account {
  firstName: String;
  lastName: String;
  userName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

export const SignUp = (account: Account) =>
  axios.post(BASE_URI + "register", account);
