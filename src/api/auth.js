import { authApi } from './axios';

export const signUp = credentials =>
  authApi.post(`/users/signup`, credentials).then(response => response.data);

export const login = credentials =>
  authApi.post(`/users/login`, credentials).then(response => response.data);

export const logout = () =>
  authApi.post(`/users/logout`).then(response => response.data);

