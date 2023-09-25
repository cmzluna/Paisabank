import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// dataCallback used for result mapping
const useCallApi = (api, dataCallback, dispatchCallback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api()
      .then((res) => {
        console.log("here");
        if (res) {
          const formattedData =
            dataCallback && typeof dataCallback === "function" ? dataCallback(res.data) : res;

          if (dispatchCallback && typeof dispatchCallback === "function")
            dispatch(dispatchCallback(formattedData));

          setData(formattedData);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data };
};

export default useCallApi;
