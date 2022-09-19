import Navigation from 'layout/Navigation';
import NavAuth from 'layout/NavAuth';
import { Header } from './AppBar.style';
import UserMenu from 'layout/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </Header>
  );
};

