import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, signUp } from 'api/auth';
import { token } from 'api/axios';
import { Notify } from 'notiflix';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await signUp(credentials);
    token.set(data.token);
    Notify.success('Registration successful!');
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await login(credentials);
    console.log(data);
    token.set(data.token);
    Notify.success('You are login!');
    return data;
  } catch (error) {
    Notify.error('Oops, something went wrong!');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await logout();
    token.unset();
    Notify.success('You are logout!');
  } catch (error) {
    Notify.error('Oops, something went wrong!');
  }
});


export const operations = {
  register,
  logOut,
  logIn,
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },    
  },
});

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const getIsRefreshingUser = state => state.auth.isRefreshingUser;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
};


// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { token } from 'api/axios';
// import axios from 'axios';

// const initialState = {
//   user: {
//     name: '',
//     email: null,
//   },
//   token: null,
//   isLogged: false,
// };

// export const getUserName = state => state.auth.user.name;
// export const getLogging = state => state.auth.isLogged;
// export const getToken = state => state.auth.token;

// export const registerUser = createAsyncThunk('auth/register', async values => {
//   try {
//     const result = await axios.post('/users/signup', values);
//     token.set(result.data.token);
//     Notify.success('Registration successful!');
//     console.log(result.data);
//     return result.data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// });

// export const loginUser = createAsyncThunk('auth/login', async values => {
//   try {
//     const result = await axios.post('/users/login', values);
//     token.set(result.data.token);
//     console.log(result.data);
//     Notify.success('Login successful!');
//     return result.data;
//   } catch (error) {
//     Notify.failure(`${error}. This user dont exist`);
//   }
// });

// export const logoutUser = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//     Notify.success('Logout successful!');
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// });

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [registerUser.fulfilled](state, action) {
//       console.log(action);
//       state.user.name = action.payload.user.name;
//       state.user.email = action.payload.user.email;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       localStorage.setItem('isLoggedIn', 'true');
//     },
//     [loginUser.fulfilled](state, action) {
//       console.log(action);
//       state.user.name = action.payload.user.name;
//       state.user.email = action.payload.user.email;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       // localStorage.setItem('isLoggedIn', 'true');
//     },
//     [logoutUser.fulfilled](state) {
//       state.user.name = '';
//       state.user.email = null;
//       state.token = null;
//       state.isLoggedIn = false;
//       // localStorage.removeItem('isLoggedIn');
//     },
//   },
// });
