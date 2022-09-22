import Navigation from 'layout/Navigation';
import { useSelector } from 'react-redux';
import NavAuth from 'layout/NavAuth';
import { Header } from './AppBar.style';
import UserMenu from 'layout/UserMenu/UserMenu';

export const AppBar = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <Header>
      <Navigation />
      {isLogged ? <UserMenu /> : <NavAuth /> }
     
    </Header>
  );
};

