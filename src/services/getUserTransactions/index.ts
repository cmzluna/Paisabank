import { type Transaction } from "../../types";
import callApi from "../callApi";

interface TransactionApi {
  success: boolean;
  data: Transaction[];
}

const getUserTransactions = async (body = {}) =>
  await callApi<TransactionApi>(
    "/paisabank/transactions",
    "get",
    {},
    "Error al recuperar tur transacciones 🤔",
  );

export default getUserTransactions;
