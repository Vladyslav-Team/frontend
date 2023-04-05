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
    async ({url, method, data, auth, headers}) => {
        const response = await axiosInstance({
            url: url,
            method: method,
            data: data,
            auth: auth,
            headers: {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJTa2lsbFNjb3BlIiwic3ViIjoiM0BnbWFpbC5jb20iLCJpZCI6MzMsImV4cCI6MTY4MDcyNjMzOCwiaWF0IjoxNjgwNzIzNjM4fQ.KZFEd5NxFedPyx84aypXIDtfLDbZs6ZBmU5d0D3Uja8ygAgryc9UG5XYuoZ0SpK2ha1uEu4B_vTxetWbP7QdeQit3A8k2yJITqc2vh-r-a1M665RS9W1lMir19EBHlzUKGby17XXovlC0TOzIAzTkxlwg0x3WzTemOa9vnLbQ6tqphDqutNdDLHbb3D66Qejm8bImO4P1_UY2YIRDaI1MbTOaholAnAqF6i_muOnvJbDA-_VI5zzZwlx1XydQwMgyHYe9udLgjwEeow75_6xNW4Ln_dKYuZVKzdq9FFNTJKO1zRKZhNcyStuIZlIUZmjDZdDi28xDz2A6I_R6uHDaw",
            },
        })
        console.log(response.data)
        return {data: response.data}
    }
