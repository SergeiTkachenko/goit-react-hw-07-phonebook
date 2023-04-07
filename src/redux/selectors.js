import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFolteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
    return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  }
);
