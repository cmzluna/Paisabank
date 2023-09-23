import { useState, useEffect } from "react";

const useCallApi = (api) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data };
};

export default useCallApi;
