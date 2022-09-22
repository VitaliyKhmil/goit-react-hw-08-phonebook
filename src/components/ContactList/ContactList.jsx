import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getItems,
  getFilterValue,
  getAllContactsAsync,
  deleteContactAsync,
} from 'redux/contactsSlice';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
  ButtonDelete,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getItems);
  const filter = useSelector(getFilterValue);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, []);

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id}>
            {name}:<ContactsListText>{number}</ContactsListText>
            <ButtonDelete
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delate
            </ButtonDelete>
          </ContactsListItem>
        );
      })}
    </ContactsList>
  );
};
