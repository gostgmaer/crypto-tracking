import { useEffect, useState } from "react";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";

const useFetch = (endpoint, method, header, body, query) => {
  const [Data, SetData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const apicall = async () => {
    setloading(true);
    setError(null);
    try {
      const res = await InvokeAPI(endpoint, method, body, header, query);
    SetData(res);
    } catch (e) {
      setError(e.message)
      
    }
    setloading(false);
  };

  useEffect(() => {
    apicall();
  }, [endpoint]);

  return { Data, loading, error };
};
export default useFetch;
