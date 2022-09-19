import Notiflix from 'notiflix';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, signUp, userCurrent } from 'api/auth';
import { token } from 'api/authApi';


const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await signUp(credentials);
    token.set(data.token);
Notiflix.Notify.warning(
  'You are registered!'
);
    return data;
  } catch (error) {
    Notiflix.Notify.warning('An error occurred while registering! Please, try again!');
  }
});  

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await login(credentials);
    token.set(data.token);
Notiflix.Notify.warning(
  'You are login!');
    return data;
  } catch (error) {
    Notiflix.Notify.warning('You entered an incorrect email or password! Please, try again!');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await logout();
    token.unset();
Notiflix.Notify.warning(
  'You are logout!');
  } catch (error) {
    Notiflix.Notify.warning('Opps! Please, try again!');
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
    token.set(persistedToken);
    try {
    const data = await userCurrent();
    return data;
  } catch (error) {
    Notiflix.Notify.warning('Opps! Please, try again!');
  }
})



export const operations = {
   register,
   logIn,
   logOut, 
   fetchCurrentUser,
};


const initialState = {
  user: {
    name: null,
    email: null,
  },
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
    [operations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
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

