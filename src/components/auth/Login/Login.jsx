import { useDispatch } from 'react-redux';
import style from 'components/Form/Form.module.css';
import { Box } from 'styles/Box';
import { loginUser } from 'redux/authSlice';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginUser(user));
  };

  return (
    <Box
      display="flex"
      align-items="center"
      flexDirection="column"
      margin="0 auto"
      width="350px"
    >
      <h1>USER LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Email
          <input type="email" name="email" className={style.input} />
        </label>
        <label className={style.label}>
          Password
          <input type="password" name="password" className={style.input} />
        </label>
        <div className={style.buttonDiv}>
          <button type="submit" className={style.button}>
            LOGIN
          </button>
        </div>
      </form>
    </Box>
  );
};

export default LoginView;
