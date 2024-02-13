import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656e2bc1bcc5618d3c249fca.mockapi.io';

// const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
//   try {
//     const res = await axios.get('/adverts');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

const fetchCars = createAsyncThunk(
  "cars/fetchall",
  async (_, thunkAPI) => {
      try {
          const { data } = await axios.get("/adverts");
          return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

// const fetchBrandsList = createAsyncThunk(
//   'cars/fetchBrands',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/adverts');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const carsOperations = {
  fetchCars,
  // fetchBrandsList,
};

export default carsOperations;
