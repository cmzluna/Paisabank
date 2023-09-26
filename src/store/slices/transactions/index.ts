import { createSlice } from "@reduxjs/toolkit";
import { type Transaction } from "../../../types";

interface TransactionType {
  transactions: Transaction[];
}

const initialState: TransactionType = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (prevState, { payload }) => {
      return {
        transactions: payload,
      };
    },
    resetTransactions: (prevState, action) => {
      return { transactions: [] };
    },
  },
});

export const { setTransactions, resetTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
