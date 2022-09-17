import ContactList from 'components/ContactList';
import Form from 'components/Form';
import Filter from 'components/Filter';
import { Box } from 'styles/Box';

const ContactsView = () => {
  return (
    <Box display="flex" align-items="center" flexDirection="column" >
      <Form />
      <Box display="flex" align-items="center" flexDirection="column">
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};

export default ContactsView;
