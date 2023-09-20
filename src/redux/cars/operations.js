// import axios from 'axios';

// export const themoviedbApi = async () => {
//   const response = await axios.get(
//     `https://64904bd51e6aa71680cafa12.mockapi.io/api/v1/advert`
//   );

//   // console.log(response.data);
//   return response.data;
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://64904bd51e6aa71680cafa12.mockapi.io/api/v1/advert`
      );

      // При успешном запросе возвращаем промис с данными
      console.log(data);
      return data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
