import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteItem,
  getContact,
  getFilterWord,
  fetchContacts,
} from 'redux/contactsSlice';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
  ButtonDelete,
} from './ContactList.styled';


export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getContact);
  const filter = useSelector(getFilterWord);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: <ContactsListText>{number}</ContactsListText>
          <ButtonDelete
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delate
          </ButtonDelete>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

