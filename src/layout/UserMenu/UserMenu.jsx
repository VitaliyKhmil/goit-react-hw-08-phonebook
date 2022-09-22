import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import style from './UserMenu.module.css';
import { logoutUser } from 'redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace={true} />
  };

  return (
    <div>
      <span className={style.name}> Welcome {name}</span>
      <button className={style.button} type="button" onClick={logoutHandler}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
