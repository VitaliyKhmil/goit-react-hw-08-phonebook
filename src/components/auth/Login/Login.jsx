import { useDispatch } from 'react-redux';
// import style from 'components/Form/Form.module.css';
// import { Box } from 'styles/Box';
import { operations } from 'redux/authSlice';
import { Formik } from 'formik';
import { FormEl } from 'components/auth/Login/FormEl';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {    
    dispatch(operations.logIn(values));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <FormEl>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">LOGIN</button>
      </FormEl>
    </Formik>
  );
};

export default LoginView;
