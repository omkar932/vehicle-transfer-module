import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Driver, createDriver, fetchDrivers } from "../../utils/driverService";
interface DriverState {
  drivers: Driver[];
  loading: boolean;
  error: string | null;
}

const initialState: DriverState = {
  drivers: [],
  loading: false,
  error: null,
};

export const loadDrivers = createAsyncThunk(
  "drivers/fetchDrivers",
  async () => {
    const response = await fetchDrivers();
    return response.data;
  }
);

export const addDriver = createAsyncThunk(
  "drivers/createDriver",
  async (newDriver: Driver) => {
    const response = await createDriver(newDriver);
    return response.data;
  }
);

const driverSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDrivers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.drivers = action.payload?.data;
      })
      .addCase(loadDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load drivers";
      })
      .addCase(addDriver.fulfilled, (state, action: PayloadAction<Driver>) => {
        state.drivers.push(action.payload);
      });
  },
});

export default driverSlice.reducer;
