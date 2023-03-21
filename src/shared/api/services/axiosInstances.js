import axios from "axios";
import { Endpoints } from "../constants/endpoints";
import { getMockInit } from "../mock/mock";
getMockInit();

export const axiosInstanceGet = axios.create({
  method: "GET",
  baseURL: Endpoints.BASE_ENDPOINT_BACKEND,
});
