import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the initial state for the auth slice
const initialState = {
  isLogin: false
};

// Create an auth slice with reducers for logging in and out
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

// Export actions from the slice for use in components
export const { login, logout } = authSlice.actions;

// Define the root reducer in case you add more slices later
const rootReducer = {
  auth: authSlice.reducer
};

// Create the store using the rootReducer
export const store = configureStore({
  reducer: rootReducer,
});

// This setup allows the store to be scalable, accommodating more slices as needed.
