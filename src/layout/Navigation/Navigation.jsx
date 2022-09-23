import { HomeLink, NavStyle } from './Navigation.style';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
const { isLoggedIn } = useAuth();

  return (
    <NavStyle>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to="/contacts">Phonebook</HomeLink>}
    </NavStyle>
  );
};

export default Navigation;



     
    