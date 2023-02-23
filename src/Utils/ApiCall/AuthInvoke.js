import axios from "axios";
import { notifyerror } from "../Notifications/Notice";

const AuthInvokeAPI = async (endpoint, type, body, queryParam) => {
  const baseURL = 'https://ceebit-vwr.inadev.net/'
  const token = "c2NoZWR1bGluZ3NlcnZlcjpwYXNzd29yZEAxMjM="
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: { Authorization: `bearer ${token}`, accept: "application/json" },
    params: queryParam,
    data: body,
  };
  let response;
  let error;
  try {
    response = await axios.request(option);
  } catch (e) {
    // console.log(e);
    notifyerror(e.message, 2000);
    error = e.message;
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : error; // or set initial value
};
export default AuthInvokeAPI;

