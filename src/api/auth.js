import { authApi } from './authApi';

export const signUp = credentials =>
  authApi.post(`/users/signup`, credentials).then(response => response.data);

export const login = credentials =>
  authApi.post(`/users/login`, credentials).then(response => response.data);

export const logout = () =>
  authApi.post(`/users/logout`).then(response => response.data);

export const userCurrent = () =>
  authApi.get(`/users/current`).then(response => response.data);





