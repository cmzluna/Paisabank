import { createSlice } from "@reduxjs/toolkit";
import { type Contact } from "../../../types";

interface ContactType {
  contacts: Contact[];
}

const initialState: ContactType = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (prevState, { payload }) => {
      return {
        contacts: payload,
      };
    },
    resetContacts: (prevState, action) => {
      return { contacts: [] };
    },
  },
});

export const { setContacts, resetContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
