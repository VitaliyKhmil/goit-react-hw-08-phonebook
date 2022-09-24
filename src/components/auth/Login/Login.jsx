import { useDispatch } from 'react-redux';
import { operations } from 'redux/authSlice';
import { Formik } from 'formik';
import { FormEl, Input } from 'components/ui/formik';
import { Label } from 'components/ui/formik/Label';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {    
    dispatch(operations.logIn(values));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <FormEl>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <button type="submit">LOGIN</button>
      </FormEl>
    </Formik>
  );
};

export default LoginView;
