import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Transfer,
  fetchTransfers,
  createTransfer,
} from "../../utils/transferService";

interface TransferState {
  transfers: Transfer[];
  loading: boolean;
  error: string | null;
}

const initialState: TransferState = {
  transfers: [],
  loading: false,
  error: null,
};

export const loadTransfers = createAsyncThunk(
  "transfers/fetchTransfers",
  async () => {
    const response = await fetchTransfers();
    return response.data;
  }
);

export const addTransfer = createAsyncThunk(
  "transfers/createTransfer",
  async (newTransfer: Transfer) => {
    const response = await createTransfer(newTransfer);
    return response.data;
  }
);

const transferSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTransfers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loadTransfers.fulfilled,
        (state, action: PayloadAction<Transfer[]>) => {
          state.loading = false;
          state.transfers = action.payload;
        }
      )
      .addCase(loadTransfers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load transfers";
      })
      .addCase(
        addTransfer.fulfilled,
        (state, action: PayloadAction<Transfer>) => {
          state.transfers.push(action.payload);
        }
      );
  },
});

export default transferSlice.reducer;
