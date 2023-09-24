import { useState, useEffect } from "react";

// dataCallback used for result mapping
const useCallApi = (api, dataCallback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .then((res) => {
        console.log("here");
        if (res) {
          const formattedData =
            dataCallback && typeof dataCallback === "function" ? dataCallback(res.data) : res;

          setData(formattedData);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data };
};

export default useCallApi;
