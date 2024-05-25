"use client";
import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./slices/driverSlice";
import vehicleReducer from "./slices/vehicleSlice";
import transferReducer from "./slices/transferSlice";

const store = configureStore({
  reducer: {
    drivers: driverReducer,
    vehicles: vehicleReducer,
    transfers: transferReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
