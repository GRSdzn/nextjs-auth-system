import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import authReducer from './features/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// export const store = () =>
//   configureStore({
//     reducer: {
//       [apiSlice.reducerPath]: apiSlice.reducer,
//       auth: authReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: process.env.NODE_ENV !== 'production',
//   });

// export type AppStore = ReturnType<typeof store>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
