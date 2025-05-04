import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch weather
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  }
);

// Creating Slice
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        // 🔹 When API request starts
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        // 🔹 When API request succeeds
        state.loading = false;
        state.data = action.payload; // Store fetched weather data
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        // 🔹 When API request fails
        state.loading = false;
        state.error = action.error.message; // Store error message
      });
  },
});

export default weatherSlice.reducer;
