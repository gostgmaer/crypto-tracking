import axios from "axios";
import { useState } from "react";
import { notifyerror } from "../Notifications/Notice";

const InvokeAPI = async (endpoint, type, body, headerParams, queryParam) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const token = process.env.REACT_APP_API_TOKEN;
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
export default InvokeAPI;
