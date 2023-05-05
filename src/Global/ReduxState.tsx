import { createSlice } from "@reduxjs/toolkit";

import { UserData } from "./AllInterfaces";

const initialState = {
  user: {} as UserData | null,
};

const ReduxState = createSlice({
  name: "FoodAppAuth",
  initialState,
  reducers: {},
});

export const {} = ReduxState.actions;

export default ReduxState.reducer;
