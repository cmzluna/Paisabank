import { createSlice } from "@reduxjs/toolkit";

interface AuthType {
  isLogging: boolean;
}

const initialState: AuthType = {
  isLogging: false, // not persisted key
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (prevState, action) => {
      return {
        isLogging: true,
      };
    },
  },
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;
