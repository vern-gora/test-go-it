import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './slice';
import { filterReducer } from './slice';
import { favoriteReducer } from './slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'favorite',
  storage,
}

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer)

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cars: carsReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
