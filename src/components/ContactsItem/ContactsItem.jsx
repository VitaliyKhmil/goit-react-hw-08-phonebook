import style from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { contactsSlice } from 'redux/contacts';
import { LoaderMini } from 'components/Loader/Loader';

function ContactsItem({ contact }) {
  const [deleteTodo, { isLoading: isDeleting }] =
    contactsSlice.useDeleteContactMutation();

  return (
    <li className={style.contact}>
      <p className={style.name}>{contact.name} :</p>
      <p className={style.number}>{contact.number}</p>

      <button
        className={style.button}
        type="button"
        onClick={() => deleteTodo(contact.id) && Notiflix.Notify.failure(`${contact.name} Delete in contacts`)}
        disabled={isDeleting}
      >
        {isDeleting ? <LoaderMini /> : <span>Delete</span>}
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default ContactsItem;
