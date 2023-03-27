import axios from "axios"
import {Endpoints} from "../constants/endpoints"
import {MockInit} from "../mock/mock"
MockInit()

export const axiosInstance = axios.create({
    baseURL: Endpoints.BASE_ENDPOINT_BACKEND,
})
