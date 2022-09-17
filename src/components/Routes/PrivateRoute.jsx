import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';


export default function PrivateRoute({
  component: Component,
    redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}


