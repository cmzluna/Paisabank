import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
}

interface AuthType {
  user: User | null;
  isLoading: boolean;
  rememberMe: boolean;
}

const initialState: AuthType = {
  user: null,
  isLoading: false,
  rememberMe: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (prevState, { payload }) => {
      return {
        user: { name: payload.name, email: payload.email },
        isLoading: false,
        rememberMe: payload.rememberMe,
      };
    },
    deleteUser: (prevState, action) => {
      return { user: null, isLoading: false, rememberMe: false };
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
