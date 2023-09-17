import axios from "axios";

export const BASE_URL = "http://localhost:8080";
export const AXIOS_OBJ = axios.create({
  baseURL: BASE_URL,
});
