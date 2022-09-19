import { useDispatch } from 'react-redux';
import {operations} from 'redux/authSlice';
import style from 'components/Form/Form.module.css';
import { Box } from 'styles/Box';

const LoginView = () => {
  const dispatch = useDispatch();

  
   const handleSubmit = (values, { resetForm }) => {
     dispatch(operations.logIn(values));
     resetForm();
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
          <input
            type="email"
            name="email"
            // onChange={handleSubmit}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            // onChange={handleSubmit}
            className={style.input}
          />
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
