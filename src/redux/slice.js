import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsOperations from './operations.js';

export const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    ads: [],
    favorite: [],
    isLoading: false,
    error: null,
    selectedCar: [],
    carBrands: [],
  },

  reducers: {
    onCarSelect(state, action) {
      state.selectedCar = action.payload;
    },

    addFavorite(state, action) {
      state.favorite.push(...action.payload);
    },

    removeFavorite(state, action) {
      const index = state.favorite.findIndex(({ id }) => id === action.payload);
      state.favorite.splice(index, 1);
    },
    filterCars(state, action) {
      state.ads = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(carsOperations.fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(carsOperations.fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ads = action.payload;
      })
      .addCase(carsOperations.fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(carsOperations.fetchBrandsList.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.carBrands = action.payload;
      // })
      // .addCase(carsOperations.fetchBrandsList.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      ;
  },
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: "" },
  reducers: {
      setFilterList(state, action) {
          state.filter = action.payload;
      },
  },
});

const initialState = {
  favorite: [],
  isLoading: false,
  error: null,
};

export const favoriteCarsSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
      setFavoriteCars(state, action) {
          state.favorite.push(action.payload);
      },
      deleteFavoriteCar(state, action) {
          const index = state.favorite.findIndex(fav => fav.idCar === action.payload);
          state.favorite.splice(index, 1);
      },
  }
});

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorite'],
};

export const carsReducer = persistReducer(persistConfig, carsSlice.reducer);
export const filterReducer = filterSlice.reducer;
export const favoriteReducer = favoriteCarsSlice.reducer;

export const { onCarSelect, addFavorite, removeFavorite, filterCars } =
  carsSlice.actions;
export const { setFilterList } = filterSlice.actions;
export const { setFavoriteCars, deleteFavoriteCar } = favoriteCarsSlice.actions;
