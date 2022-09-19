import {ContactList} from 'components/ContactList/ContactList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import { Box } from 'styles/Box';

const Contacts = () => {
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

export default Contacts;
