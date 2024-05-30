import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMultiplayer } from "../../helpers/backend_helper";

export const getMultiplayer = createAsyncThunk(
  "getMultiplayer",
  async (values, { rejectWithValue, getState }) => {
    try {
      const { filter } = getState().Multiplayer;
      // Call the fetchMultiplayer function to authenticate user
      const response = await fetchMultiplayer({ ...values, ...filter });

      // Return response data
      return response.data;
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.message || // Check if error message is available in response
        error.message || // Otherwise, use generic error message
        "Oops! Something went wrong.";

      // Reject with error message
      return rejectWithValue(errorMessage);
    }
  }
);
