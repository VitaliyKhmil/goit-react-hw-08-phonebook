import { useDispatch, useSelector } from 'react-redux';
import style from './UserMenu.module.css';
import { logoutUser } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const name = useSelector(state => state.auth.user.name);
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div>
      <span className={style.name}>{name}</span>
      <button className={style.button} type="button" onClick={logoutHandler}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
