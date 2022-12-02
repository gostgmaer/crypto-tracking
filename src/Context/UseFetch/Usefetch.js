import { useEffect, useState } from "react";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";

const useFetch = (endpoint, method, header,body, query ) => {
  const [Data, SetData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    apicall();
  }, [endpoint]);

  const apicall = async () => {
    const res = await InvokeAPI(
      endpoint,
      method,
      body,
      header,
      query
    );

    SetData(res.data);
    setloading(false);
  };
  return { Data, loading, error };
};
export default useFetch;
