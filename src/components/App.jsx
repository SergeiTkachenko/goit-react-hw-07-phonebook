import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { AddForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { ContactFilter } from './ContactsFilter/ContactFilter';

export const App = () => {
  return (
    <Layout>
      <AddForm />
      <ContactFilter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
