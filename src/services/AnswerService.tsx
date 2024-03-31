import axios from "axios";

const BASE_URI = "http://localhost:8080/api/usa/states/";

export const StateName = () => axios.get(BASE_URI + "question");
