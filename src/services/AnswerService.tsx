import axios from "axios";

const BASE_URI = "http://localhost:8080/api/usa/states/";

interface Answer {
  stateName: string;
  capitolCity: string;
}

export const SubmitAnswers = (answers: Answer[]) =>
  axios.post(BASE_URI + "questionnaire", answers);
