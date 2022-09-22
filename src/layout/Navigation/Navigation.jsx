import { HomeLink, NavStyle } from './Navigation.style';

const Navigation = () => {
  return (
    <NavStyle>
      <HomeLink to="/">Home</HomeLink>
      <HomeLink to="/contacts">Phonebook</HomeLink>
    </NavStyle>
  );
};

export default Navigation;



     
    