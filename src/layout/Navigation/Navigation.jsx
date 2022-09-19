import { useAuth } from 'hooks/useAuth';
import { HomeLink, NavStyle } from './Navigation.style';

const Navigation = () => {
  const isLoggedIn = useAuth();
  return (
    <NavStyle>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to="/contacts">Phonebook</HomeLink>}
    </NavStyle>
  );
};

export default Navigation;



     
    