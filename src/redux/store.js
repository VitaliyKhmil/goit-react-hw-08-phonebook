import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { middleware } from './middleware';
import { authSlice } from './authSlice';
import { contactsReducer } from './contactsSlice';

const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
