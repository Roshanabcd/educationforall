import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/redux/slices/authslice';
import courseReducer from '../src/redux/slices/courseSlice';
import chatReducer from '../src/redux/slices/chatSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    chat: chatReducer,
  },
});