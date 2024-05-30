// Import statements for fetchMultiplayer function and createAsyncThunk
import { createSlice } from "@reduxjs/toolkit";
import { getMultiplayer } from "./thunk";

// Initial state definition
let initialState = {
  success: null,
  loading: false,
  error: null,
  data: [],
  itemDetails: {},
  pagination: {},
  filter: {},
};

// Create slice
const slice = createSlice({
  name: "Multiplayer",
  initialState,
  reducers: {
    setMultiplayerFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  // Extra reducers to handle async actions
  extraReducers: (builder) => {
    builder
      .addCase(getMultiplayer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMultiplayer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;

        state.error = null;
      })
      .addCase(getMultiplayer.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error && action.error.message
            ? action.payload || action.payload.message
            : "An error occurred during fetch multiplayer";
      });
  },
});

export const { setMultiplayerFilter, resetMultiplayerFormError } =
  slice.actions;
export default slice.reducer;
