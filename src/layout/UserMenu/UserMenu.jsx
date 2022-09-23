import { useDispatch } from 'react-redux';
import style from './UserMenu.module.css';
import { operations } from 'redux/authSlice';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
 

  return (
    <div>
      <span className={user.name}></span>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
