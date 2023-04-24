import axios from "axios"
import {Endpoints} from "../constants/endpoints"

const axiosInstance = axios.create({
    baseURL: Endpoints.BASE_ENDPOINT_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
})

export const axiosBaseQuery =
    // eslint-disable-next-line no-unused-vars

        ({baseUrl} = {}) =>
        async ({url, method, data, auth}) => {
            const isParamsTrue = url.split("/").at(-1) !== "undefined"
            const response =
                isParamsTrue &&
                (await axiosInstance({
                    url: url,
                    method: method,
                    data: data,
                    auth: auth,
                    headers: {
                        Authorization:
                            localStorage.getItem("jwt-token") &&
                            `Bearer ${localStorage.getItem("jwt-token")}`,
                    },
                }))
            return {data: response.data}
        }
