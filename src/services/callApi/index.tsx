import axios from "axios";
import { API_BASE_URL, API_KEY } from "@env";
import { showToast } from "../../utils";
// https://github.com/axios/axios/issues/3642

export default async function callApi(
  url: string,
  method: string,
  dataRequest: object,
  errorMessage: string,
): Promise<any> {
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    method,
    headers: {
      "x-api-key": API_KEY,
    },
  });

  try {
    const { data } = await axiosInstance.post(url, dataRequest);

    return data;
  } catch (error) {
    console.log("ACA");

    if (axios.isAxiosError(error) && error.response?.data) {
      showToast(errorMessage, "error");
      return await Promise.reject(error.response.data);
    }
  }
}
