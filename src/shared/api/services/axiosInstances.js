import axios from "axios"
import {Endpoints} from "../constants/endpoints"
import {MockInit} from "./../mock/mock"
MockInit()
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
        })
        return {data: response.data}
    }
