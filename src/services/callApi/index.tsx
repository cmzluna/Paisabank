import axios from "axios";
import { API_BASE_URL, API_KEY } from "@env";
import { showToast } from "../../utils";

export default async function callApi<T>(
  url: string,
  method: string,
  dataRequest: object,
  errorMessage: string,
): Promise<any> {
  const requestConfig = {
    baseURL: API_BASE_URL,
    url,
    data: dataRequest,
    method,
    headers: {
      "x-api-key": API_KEY,
    },
  };

  try {
    const { data } = await axios.request<{ data: T }>(requestConfig);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      showToast(errorMessage, "error");
      return await Promise.reject(error.response.data);
    }
  }
}
