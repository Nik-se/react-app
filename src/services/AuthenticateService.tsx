import axios from "axios";
import host from "./BaseService";

const BASE_URI = host + "api/quizz/";

export interface Login {
  emailOrUserName: string;
  password: string;
}

export const Authenticate = (login: Login) =>
  axios.post(BASE_URI + "login", login);
