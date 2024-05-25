import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Vehicle,
  fetchVehicles,
  createVehicle,
} from "../../utils/vehicleService";

interface VehicleState {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  vehicles: [],
  loading: false,
  error: null,
};

export const loadVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const response = await fetchVehicles();
    return response.data;
  }
);

export const addVehicle = createAsyncThunk(
  "vehicles/createVehicle",
  async (newVehicle: Vehicle) => {
    const response = await createVehicle(newVehicle);
    return response.data;
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loadVehicles.fulfilled,
        (state, action: PayloadAction<Vehicle[]>) => {
          state.loading = false;
          state.vehicles = action.payload;
        }
      )
      .addCase(loadVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load vehicles";
      })
      .addCase(
        addVehicle.fulfilled,
        (state, action: PayloadAction<Vehicle>) => {
          state.vehicles.push(action.payload);
        }
      );
  },
});

export default vehicleSlice.reducer;
