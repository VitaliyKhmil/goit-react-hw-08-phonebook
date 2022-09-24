import { useDispatch } from 'react-redux';
import { operations } from 'redux/authSlice';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'styles/Box';
import { UserMenuText, Userbutton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
    const { user } = useAuth();
    
    console.log(user);
 

  return (
    <Box display="flex" alignItems="center">
      <UserMenuText> Welcome, {user.name}</UserMenuText>
      <Userbutton type="button" onClick={() => dispatch(operations.logOut())}>
        LOG OUT
      </Userbutton>
    </Box>
  );
};

export default UserMenu;
