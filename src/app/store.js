import { configureStore } from '@reduxjs/toolkit';
import quotedReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    quotes: quotedReducer,
  },
})
