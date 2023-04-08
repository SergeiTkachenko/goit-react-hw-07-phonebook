import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDelContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch(
        editContact({
          id,
          name: editName,
          number: editNumber,
        })
      );
    }
  };

  const handleNameChange = e => {
    setEditName(e.target.value);
  };

  const handleNumberChange = e => {
    setEditNumber(e.target.value);
  };

  return (
    <Item>
      {isEdit ? (
        <>
          <input value={editName} onChange={handleNameChange} />
          <input value={editNumber} onChange={handleNumberChange} />
        </>
      ) : (
        <>
          {name}
          <br />
          {number}
        </>
      )}
      <button onClick={handleEditContact}>{isEdit ? 'Save' : 'Edit'}</button>
      <button onClick={() => handleDelContact(id)}>Delete</button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
