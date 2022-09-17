import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import operations from 'redux/auth/authOperations';
import { Navigate } from 'react-router';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
   const logoutHandler = () => {
     dispatch(operations.logOut());
     <Navigate to="/" replace={true} />;
   };
  return (
    <div>
      <span className={style.name}>{name}</span>
      <button
        className={style.button}
        type="button"
        onClick= { logoutHandler }>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
