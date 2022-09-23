import Navigation from 'layout/Navigation';
import { useAuth } from 'hooks/useAuth';
import NavAuth from 'layout/NavAuth';
import { Header } from './AppBar.style';
import UserMenu from 'layout/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </Header>
  );
};

