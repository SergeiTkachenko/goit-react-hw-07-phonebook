import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './Form.styled';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';

const ValidSchema = object().shape({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid!'
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Number is not valid!'
    )
    .required(),
});

export const AddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (contacts.some(contact => contact.name === name)) {
      alert('contact already exists');
      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            Name{' '}
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" component="span" />
          </FormField>

          <FormField>
            Number{' '}
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" component="span" />
          </FormField>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
