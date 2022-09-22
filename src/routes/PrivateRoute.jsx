import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component }) => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // console.log({ isLoggedIn });

  return !isLoggedIn ? <Navigate to="/" /> : component;
};
