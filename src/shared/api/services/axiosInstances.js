import axios from "axios"
import {Endpoints} from "../constants/endpoints"
import {useJwtCheck} from "../hooks"

const axiosInstance = axios.create({
    baseURL: Endpoints.BASE_ENDPOINT_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
})

export const axiosBaseQuery =
    ({baseUrl} = {}) =>
    async ({url, method, data, auth}) => {
        const response = await axiosInstance({
            url: url,
            method: method,
            data: data,
            auth: auth,
            headers: {
                Authorization:
                    localStorage.getItem("jwt-token") &&
                    `Bearer ${localStorage.getItem("jwt-token")}`,
            },
        })
        return {data: response.data}
    }
