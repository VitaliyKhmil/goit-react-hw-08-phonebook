import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';
import style from './UserMenu.module.css';
import { operations } from 'redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
   const logoutHandler = () => {
     dispatch(operations.logOut());
     <Navigate to="/" replace={true} />;
   };
  return (
    <div>
      <span className={style.name}>{user}</span>
      <button className={style.button} type="button" onClick={logoutHandler}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
