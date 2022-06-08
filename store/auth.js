import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    token: null,
    userId: null,
    username: null,
    isLoggedIn: false,
  },

  reducers: {
    login(state, action) {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('username', action.payload.username);

      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.isLoggedIn = true;
    },

    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');

      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
