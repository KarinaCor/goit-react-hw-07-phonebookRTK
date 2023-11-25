
import * as SC from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useGetContactsQuery } from 'redux/contactOperation/contactOperation';

export const App = () => {
  const { data } = useGetContactsQuery()

  return (
    <SC.Wrapper>
      <SC.MainTitle>Phonebook</SC.MainTitle>
      <ContactForm />

      <SC.Title>Contacts</SC.Title>

      {data?.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <SC.Descr>Phonebook is empty</SC.Descr>
      )}
    </SC.Wrapper>
  );
};
