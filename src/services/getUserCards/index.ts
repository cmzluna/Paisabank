import { type Card } from "../../types";
import callApi from "../callApi";

interface ApiOutput {
  success: boolean;
  data: Card[];
}

const getUserCards = async (): Promise<ApiOutput> =>
  await callApi<ApiOutput>("/paisabank/cards", "get", {}, "Error al recuperar tarjetas 🤔");

export default getUserCards;
