import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { AddForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { ContactFilter } from './ContactsFilter/ContactFilter';
import { selectError, selectIsLoading } from 'redux/selectors';
import Spinner from './Spinner/spinner';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Layout>
      <AddForm />
      <ContactFilter />
      {isLoading && !error && <Spinner />}
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
