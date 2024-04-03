import axios from "axios";
import host from "./BaseService";

const BASE_URI = host + "api/usa/states/";

export const StateName = () => axios.get(BASE_URI + "questions");
