import { useDispatch } from 'react-redux';
import { Box } from 'styles/Box';
import { operations } from 'redux/authSlice';
import { FormEl, Input } from 'components/ui/formik';
import { Label } from 'components/ui/formik/Label';
import { Formik } from 'formik';


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
      >
        <FormEl>
          <Label>
            Name
            <Input type="name" name="name" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>

          <button type="submit">REGISTER</button>
        </FormEl>
      </Formik>
    </Box>
  );
};

export default RegisterView;
