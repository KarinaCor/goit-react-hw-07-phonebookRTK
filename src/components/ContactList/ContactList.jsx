import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../ContactList/ContactList.styled';
import { getContacts } from 'redux/contact/contact.selector';
import { getFilter } from 'redux/filter/filter.selector';
import { deleteContacts } from 'redux/contact/contact.reducer';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getFilteredContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <SC.List>
      {getFilteredContact.map(({ id, name, number }) => (
        <SC.Item key={id}>
          {name}: {number}
          <SC.Button onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </SC.Button>
        </SC.Item>
      ))}
    </SC.List>
  );
};

export default ContactList;
