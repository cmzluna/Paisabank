import { type Card } from "../../types";
import callApi from "../callApi";

interface Login {
  success: boolean;
  data: Card[];
}

const getUserCards = async (body) =>
  await callApi<Login>("/paisabank/cards", "get", (body = {}), "Error al recuperar tarjetas 🤔");

export default getUserCards;
