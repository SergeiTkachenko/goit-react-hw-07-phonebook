// import { Component } from 'react';

import { ContactItem } from '../ContactItem/ContsctItem';
import { useSelector } from 'react-redux';
import { selectFolteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFolteredContacts);
  return (
    <div>
      {contacts.map(item => (
        <ul key={item.id}>
          <ContactItem item={item} />
        </ul>
      ))}
    </div>
  );
};
