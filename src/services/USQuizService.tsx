import axios from "axios";

const BASE_URI = "http://34.106.118.189/api/usa/states/";

export const StateName = () => axios.get(BASE_URI + "questions");
