import { useState } from 'react';
import * as SC from './ContactForm.styled';

import { nanoid } from 'nanoid';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/contactOperation/contactOperation';

const ContactForm = () => {

  
  
  const {data} = useGetContactsQuery()
  const [addContact] = useAddContactsMutation()

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const hasDuplicates = data?.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      name,
      phone:number,
      id: nanoid(),
    };
    await addContact(newContact)
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label>
        Name
        <SC.Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </SC.Label>
      <SC.Label>
        Number
        <SC.Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </SC.Label>
      <SC.Button type="submit">Add contact</SC.Button>
    </SC.Form>
  );
};

export default ContactForm;
