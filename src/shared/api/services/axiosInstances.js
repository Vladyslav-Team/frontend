import axios from "axios"
import {Endpoints} from "../constants/endpoints"

const axiosInstance = axios.create({
    baseURL: Endpoints.BASE_ENDPOINT_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
})

export const axiosBaseQuery =
    ({baseUrl} = {}) =>
    async ({url, method, body}) => {
        try {
            const response = await axiosInstance({url: url, method: method, body: body})
            return {data: response.data}
        } catch (error) {
            console.error(error)
            throw error
        }
    }
