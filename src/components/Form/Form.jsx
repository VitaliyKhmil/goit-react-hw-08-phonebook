import style from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getContact } from 'redux/contactsSlice';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';

function Form() {
  const dispatch = useDispatch();
  const items = useSelector(getContact);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   dispatch(getAllContactsAsync());
  // }, []);

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
    <form onSubmit={handleSubmit}>
      <label className={style.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.input}
        />
      </label>
      <label className={style.label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required        
          className={style.input}
        />
      </label>
      <div className={style.buttonDiv}>
        <button type="submit" className={style.button}>
          {false ? <Loader /> : <div> Add contact</div>}
        </button>
      </div>
    </form>
  );
}

export default Form;
