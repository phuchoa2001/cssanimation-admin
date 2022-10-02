import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../api/authApi';

export const doLogin = createAsyncThunk('/admin/login', async (data) => {
  const result = await authApi.login(data);
  localStorage.setItem("token", result.data.accessToken)
  return result;
});

export const doCheckAuth = createAsyncThunk(
  'auth/checkAuth',
  async (payload) => {
    const result = await authApi.verifyToken(payload);

    return result;
  },
);

export const doGetInfo = createAsyncThunk('auth/getInfo', async () => {
  const userInfo = await authApi.getInfo();
  return userInfo;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    doLogout: (state) => {
      authApi.logout({ token: localStorage.getItem("token") })
      localStorage.removeItem('token');
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [doLogin.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
    },
    [doCheckAuth.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.isLoggedIn = true;
    },
    [doGetInfo.fulfilled]: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const getCurrentUser = (state) => state.Auth.user;

const { actions, reducer } = authSlice;
export const { doLogout } = actions;
export default reducer;
