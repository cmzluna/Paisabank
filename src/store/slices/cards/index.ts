import { createSlice } from "@reduxjs/toolkit";
import { type ParsedCard } from "../../../types";

interface AuthType {
  cards: ParsedCard[];
}

const initialState: AuthType = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (prevState, { payload }) => {
      return {
        cards: payload,
      };
    },
    resetCards: (prevState, action) => {
      return { cards: [] };
    },
  },
});

export const { setCards, resetCards } = cardsSlice.actions;

export default cardsSlice.reducer;
