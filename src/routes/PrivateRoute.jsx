import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return !isLoggedIn ? <Navigate to="/contacts" /> : component;
};
