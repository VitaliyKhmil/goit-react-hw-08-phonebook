// import UserMenu from 'layout/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { HomeLink, NavStyle } from './Navigation.style';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavStyle>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to="/login">Phonebook</HomeLink>}
    </NavStyle>
  );
};

export default Navigation;



     
    