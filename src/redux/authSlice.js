import { Notify } from 'notiflix';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/axios';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const initialState = {
  user: {
    name: '',
    email: null,
  },
  token: null,
  isLogged: false,
};

export const getUserName = state => state.auth.user.name;
export const getLogging = state => state.auth.isLogged;
export const getToken = state => state.auth.token;

export const registerUser = createAsyncThunk('auth/register', async values => {
  try {
    const result = await axios.post('/users/signup', values);
    token.set(result.data.token);
    Notify.success('Registration successful!');
    console.log(result.data);
    return result.data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async values => {
  try {
    const result = await axios.post('/users/login', values);
    token.set(result.data.token);
    console.log(result.data);
    Notify.success('Login successful!');
    return result.data;
  } catch (error) {
    Notify.failure(`${error}. This user dont exist`);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    Notify.success('Logout successful!');
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      console.log(action);
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
    },
    [loginUser.fulfilled](state, action) {
      console.log(action);
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // localStorage.setItem('isLoggedIn', 'true');
    },
    [logoutUser.fulfilled](state) {
      state.user.name = '';
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      // localStorage.removeItem('isLoggedIn');
    },
  },
});
