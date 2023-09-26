import { type Transaction } from "../../types";
import callApi from "../callApi";

interface ApiOutput {
  success: boolean;
  data: Transaction[];
}

const getUserTransactions = async (): Promise<ApiOutput> =>
  await callApi<ApiOutput>(
    "/paisabank/transactions",
    "get",
    {},
    "Error al recuperar tur transacciones 🤔",
  );

export default getUserTransactions;
