import { useDispatch } from 'react-redux';
import style from 'components/Form/Form.module.css';
import { Box } from 'styles/Box';
import { operations } from 'redux/authSlice';
import { Formik } from 'formik';
import { FormEl } from 'components/auth/Login/FormEl';


const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(operations.register(user));
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
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormEl>
          <label>
            Name
            <input type="name" name="name"/>
          </label>
          <label>
            Email
            <input type="email" name="email"/>
          </label>
          <label>
            Password
            <input type="password" name="password"/>
          </label>
          
            <button type="submit">
              REGISTER
            </button>
        </FormEl>
      </Formik>
    </Box>
  );
};

export default RegisterView;
