import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],
    isLoading: false,
    error: null,
    favoriteCar: [],
  },
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoriteCar = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReduser = carsSlice.reducer;
export const { addFavoriteCar } = carsSlice.actions;
