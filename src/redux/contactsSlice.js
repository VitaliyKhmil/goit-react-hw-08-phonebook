import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'api/ContactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notiflix.Notify.warning('Oops, something went wrong!');
      return rejectWithValue(error);
    }
  }
);

export const addItem = createAsyncThunk(
  'contacts/addItem',
  async (contact, { rejectWithValue }) => {
    try {
      await fetchAddContact(contact);
    } catch (error) {
      Notiflix.Notify.warning('Oops, something went wrong!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      Notiflix.Notify.warning('Contact added!');
      return data;
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
    } catch (error) {
      Notiflix.Notify.warning('Contact not found!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      Notiflix.Notify.warning('Contact deleted!');
      return data;
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [addItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [deleteItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
