import { HomeLink, NavStyle } from './Navigation.style';
import { useSelector } from 'react-redux';

const Navigation = () => {
const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <NavStyle>
      <HomeLink to="/">Home</HomeLink>
      {isLogged  && <HomeLink to="/contacts">Phonebook</HomeLink>}
    </NavStyle>
  );
};

export default Navigation;



     
    