import axios from "axios";
import { baseURL } from "../../services/settings";

const InvokeExternalAPI = async (
  endpoint,
  type,
  body,
  headerParams,
  query
) => {

  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: headerParams,
    params: query,
    data: body,
  };
  let response;
  try {
    response = await axios.request(option);
  } catch (e) {
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeExternalAPI;


export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};