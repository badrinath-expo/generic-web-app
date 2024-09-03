import type { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "typesafe-actions";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart:cartReducer
    }
}); 


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

