import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    delContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    editContact(state, action) {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1, action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact, editContact } = contactsSlice.actions;
