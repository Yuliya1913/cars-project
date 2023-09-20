import { configureStore } from '@reduxjs/toolkit';

import { carsReduser } from './cars/carsSlise';

export const store = configureStore({
  reducer: {
    cars: carsReduser,
  },
});
