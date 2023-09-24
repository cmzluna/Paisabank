import { type Contact } from "../../types";
import callApi from "../callApi";

interface Login {
  success: boolean;
  data: Contact[];
}

const getUserContacts = async (body = {}) =>
  await callApi<Login>("/paisabank/contacts", "get", {}, "Error al recuperar tus contactos 🤔");

export default getUserContacts;
