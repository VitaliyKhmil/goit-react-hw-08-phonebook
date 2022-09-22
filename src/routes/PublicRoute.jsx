import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ restricted = false, component }) => {
  const isLogged = useSelector(state => state.auth.isLogged);

  const redirect = isLogged && restricted;

  return redirect ? <Navigate to="/" /> : component;
};
