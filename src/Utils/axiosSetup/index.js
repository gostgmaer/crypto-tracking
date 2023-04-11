import axios from "axios";
import { baseURL } from "../../services/settings";

const InvokeExternalAPI = async (endpoint, type, body, headerParams, query) => {
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: headerParams,
    params: query,
    data: body,
  };
  let response;
  let error;

  try {
    response = await axios.request(option);
  } catch (e) {
    error = e;
  }

  let res = { data: response?.data ? response?.data : null, error: error };
  // if success return value
  return res; // or set initial value
};
export default InvokeExternalAPI;

export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};
