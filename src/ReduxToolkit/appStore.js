import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";

export const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});
