import { useDispatch } from 'react-redux';
import { operations } from 'redux/authSlice';
import { Formik } from 'formik';
import { FormEl, Input } from 'components/ui/formik';
import { Label } from 'components/ui/formik/Label';
import {ButtonLogin} from './Login.styled';

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
        <ButtonLogin type="submit">LOGIN</ButtonLogin>
      </FormEl>
    </Formik>
  );
};

export default LoginView;
