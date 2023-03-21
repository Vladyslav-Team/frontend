import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import data from './dataTalent';

var mock = new MockAdapter(axios);
export const getMockInit = () => {
  mock.onGet("/talent").reply(200, data);
};
