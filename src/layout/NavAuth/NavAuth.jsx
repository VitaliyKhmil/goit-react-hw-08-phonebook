import { NavButton, HomeLink } from './NavAuth.styled';

const NavAuth = () => {
  return (
    <div>
      <NavButton>
        <HomeLink to="/signUp"> REGISTER</HomeLink>
      </NavButton>
      <NavButton>
        <HomeLink to="/login"> LOG IN</HomeLink>
      </NavButton>
    </div>
  );
};

export default NavAuth;
