import { axiosInstance } from "./axiosInstances";
import { Endpoints } from "../constants/endpoints";
export const getTalent = async () => {
  const response = await axiosInstance.get(Endpoints.GET_ALL_TALENTS)
  return response.data;
};
