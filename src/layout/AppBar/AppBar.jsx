import Navigation from 'layout/Navigation';
import NavAuth from 'layout/NavAuth';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Header } from './AppBar.style';
import UserMenu from 'layout/UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </Header>
  );
};

