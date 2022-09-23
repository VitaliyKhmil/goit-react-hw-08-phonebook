import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from 'api/contactsApi.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.error('Oops, something went wrong!');
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
      Notify.error('Oops, something went wrong!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      Notify.success('Contact added!');
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
      Notify.error('Contact not found!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      Notify.success('Contact deleted!');
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

// import { Notify } from 'notiflix';
// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchAllContacts,
//   fetchAddContact,
//   fetchDeleteContact,
// } from 'api/contactsApi';

// const initialState = {
//   items: [],
//   filter: '',
// };

// export const getItems = state => state.contacts.items;
// export const getFilterValue = state => state.contacts.filter;

// export const getAllContactsAsync = createAsyncThunk(
//   'contacts/getAllContacts',
//   async () => {
//     try {
//       const data = await fetchAllContacts();
//       return data;
//     } catch (error) {
//       Notify.failure(error.message);
//     }
//   }
// );

// export const addNewContactAsync = createAsyncThunk(
//   'contacts/addContacts',
//   async contact => {
//     try {
//       await fetchAddContact(contact);
//       Notify.success('Contact added!');
//       const data = await fetchAllContacts();
//       return data;
//     } catch (error) {
//       Notify.failure(error.message);
//     }
//   }
// );

// export const deleteContactAsync = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     try {
//       await fetchDeleteContact(id);
//       Notify.success('Contact deleted!');
//       const data = await fetchAllContacts();
//       return data;
//     } catch (error) {
//       Notify.failure(error.message);
//     }
//   }
// );

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [getAllContactsAsync.fulfilled](state, action) {
//       state.items = [...action.payload];
//     },
//     [addNewContactAsync.fulfilled](state, action) {
//       state.items = [...action.payload];
//     },
//     [deleteContactAsync.fulfilled](state, action) {
//       state.items = [...action.payload];
//     },

//   },
//   reducers: {
//     filterItems: (state, action) => {
//       return { ...state, filter: action.payload };
//     },
//   },
// });

// export const { filterItems } = contactsSlice.actions;
