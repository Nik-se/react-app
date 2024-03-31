import axios from "axios";

const BASE_URI = "http://34.106.118.189/api/usa/states/";

export interface Answer {
  stateName: string;
  capitolCity: string;
}

export const SubmitAnswers = (answers: Answer[]) =>
  axios.post(BASE_URI + "questionnaire", answers);
