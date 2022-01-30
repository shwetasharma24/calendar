import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slice';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;