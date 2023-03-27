import MockAdapter from "axios-mock-adapter"
import axios from "axios"
import {page1, page2, page3, page4} from "./response/allTalents"
import {
    authenticationResponse,
    authenticationResponseError,
} from "./response/authentication"
import {Endpoints} from "../constants/endpoints"
const mock = new MockAdapter(axios)
export const MockInit = () => {
    mock.onGet("http://18.194.159.42:8085/talents?page=1").reply(200, page1)
    mock.onGet("http://18.194.159.42:8085/talents?page=2").reply(200, page2)
    mock.onGet("http://18.194.159.42:8085/talents?page=3").reply(200, page3)
    mock.onGet("http://18.194.159.42:8085/talents?page=4").reply(200, page4)
    mock.onGet(Endpoints.GET_TALENT_BY_ID, {params: {"talent-id": "1"}}).reply(200, {})
    mock.onPost(Endpoints.POST_TALENT_ADD).reply(200, authenticationResponse)
    mock.onPost(Endpoints.POST_TALENT_LOGIN).reply(500, authenticationResponseError)
    mock.onPatch(Endpoints.PATCH_TALENT_INFO, {params: {"talent-id": "1"}}).reply(200, {})
    mock.onDelete(Endpoints.DELETE_TALENT, {params: {"talent-id": "1"}}).reply(200, {})
}
