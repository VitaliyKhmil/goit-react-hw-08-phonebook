import { useSelector } from 'react-redux';
import { Navigate, } from 'react-router-dom';
import { authSelectors } from 'redux/authSlice';

function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;
  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
}
export default PublicRoute;

