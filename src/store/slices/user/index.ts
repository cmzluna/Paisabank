import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
}

interface AuthType {
  user: User | null;
  isLoading: boolean;
}

const initialState: AuthType = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (prevState, { payload }) => {
      return {
        user: { name: payload.name },
        isLoading: false,
      };
    },
    signOut: (prevState, action) => {
      return { user: null, isLoading: false };
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
