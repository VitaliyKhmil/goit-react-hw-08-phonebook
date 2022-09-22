import { useDispatch } from 'react-redux';
import style from 'components/Form/Form.module.css';
import { Box } from 'styles/Box';
import { registerUser } from 'redux/authSlice';


const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registerUser(user));
  };

  return (
    <Box
      display="flex"
      align-items="center"
      flexDirection="column"
      margin="0 auto"
      width="350px"
    >
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input type="name" name="name" className={style.input} />
        </label>
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
            REGISTER
          </button>
        </div>
      </form>
    </Box>
  );
};

export default RegisterView;
