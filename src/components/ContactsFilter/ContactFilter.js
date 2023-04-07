import { Filter } from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const ContactFilter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Filter>
      <h3>Contacts</h3>
      Find contact by name
      <input type="text" value={value} onChange={handleSetFilter} />
    </Filter>
  );
};
