import { authApi } from './authApi';


export const fetchAllContacts = async () => {
  return await authApi.get('/contacts').then(response => response.data);
};

export const fetchAddContact = async contact => {
  return await authApi
    .post('/contacts', contact)
    .then(response => response.data);
};

export const fetchDeleteContact = async id => {
  return await authApi.delete(`/contacts/${id}`).then(() => id);
};
