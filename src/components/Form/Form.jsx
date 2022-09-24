import { LabelForm, InputForm, ButtonForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';
import { FormEl} from 'components/ui/formik';
import { Formik } from 'formik';

function Form() {
  const dispatch = useDispatch();
  const items = useSelector(getContact);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    if (
      items.find(item =>
        item.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      Notiflix.info(`${newContact.name} is already in contacts`);
      return;
    } else {
      dispatch(addItem(newContact));
    }
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <FormEl>
        <LabelForm>
          Name
          <InputForm type="text" name="name" />
        </LabelForm>
        <LabelForm>
          Number
          <InputForm type="tel" name="number" />
        </LabelForm>
        <ButtonForm type="submit">
           Add contact
        </ButtonForm>
      </FormEl>
    </Formik>
  );
}

export default Form;
