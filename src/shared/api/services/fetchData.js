import { axiosInstanceGet } from "./axiosInstances";

export const fetchData = async (url) => {
  const response = await axiosInstanceGet(url);
  return response.data;
};
