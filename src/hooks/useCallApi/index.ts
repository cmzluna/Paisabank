import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  api: () => Promise<ReturnType>;
  dataCallback: (data: any[]) => any;
  dispatchCallback?: (data: any[]) => any;
}

interface ReturnType {
  isLoading: boolean;
  data: any[];
}

// dataCallback used for result mapping
function useCallApi({ api, dataCallback, dispatchCallback }: Props): ReturnType {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api()
      .then((res) => {
        if (res) {
          const formattedData =
            dataCallback && typeof dataCallback === "function" ? dataCallback(res.data) : res;

          if (dispatchCallback && typeof dispatchCallback === "function") {
            dispatch(dispatchCallback(formattedData));
          }

          setData(formattedData);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
}

export default useCallApi;
