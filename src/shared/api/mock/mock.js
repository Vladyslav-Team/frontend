import MockAdapter from "axios-mock-adapter"
import axios from "axios"
import {allTalentsResponse} from "./response/allTalents"
import {
    authenticationResponse,
    authenticationResponseError,
} from "./response/authentication"
import {Endpoints} from "../constants/endpoints"
const mock = new MockAdapter(axios)
export const MockInit = () => {
    mock.onGet("/talents").reply(200, allTalentsResponse)
    mock.onGet(Endpoints.GET_TALENT_BY_ID, {params: {"talent-id": "1"}}).reply(200, {})
    mock.onPost(Endpoints.POST_TALENT_ADD).reply(200, authenticationResponse)
    mock.onPost(Endpoints.POST_TALENT_LOGIN).reply(500, authenticationResponseError)
    mock.onPatch(Endpoints.PATCH_TALENT_INFO, {params: {"talent-id": "1"}}).reply(200, {})
    mock.onDelete(Endpoints.DELETE_TALENT, {params: {"talent-id": "1"}}).reply(200, {})
}
