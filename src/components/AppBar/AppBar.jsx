import Navigation from 'components/Navigation';
import NavAuth from 'components/NavAuth';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import style from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <p className={style.link}>
        Phonebook
      </p>
      {isLoggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default AppBar;
