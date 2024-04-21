import axios from "axios";
import host from "./BaseService";

const BASE_URI = host + "api/usa/states/";

export interface Answer {
  stateName: string;
  capitolCity: string;
}

export const SubmitAnswers = (answers: Answer[]) =>
  axios.post(BASE_URI + "questionnaire", answers);
