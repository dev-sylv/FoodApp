import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

import { UserData } from "./AllInterfaces";

const initialState = {
  user: {} as UserData | null,
};

const ReduxState = createSlice({
  name: "FoodAppAuth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<UserData>) => {
      state.user = payload;
    },
  },
  logout: (state) => {
    state!.user = null;
  },
});

export const { login, logout } = ReduxState.actions;

export default ReduxState.reducer;
