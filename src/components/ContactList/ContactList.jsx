import { useSelector } from 'react-redux';
import * as SC from '../ContactList/ContactList.styled';

import { getFilter } from 'redux/filter/filter.selector';

import { useDeleteContactsMutation, useGetContactsQuery } from 'redux/contactOperation/contactOperation';

const ContactList = () => {
  
  const {data} = useGetContactsQuery()
 const [deleteContact] = useDeleteContactsMutation()
  
  const filter = useSelector(getFilter);
  const getFilteredContact = data?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    
  

    <SC.List>
    {getFilteredContact?.map(({ id, name, phone }) => (
      <SC.Item key={id}>
        {name}: {phone}
        
        <SC.Button onClick={() => deleteContact(id)}> 
          Delete
        </SC.Button> 
      </SC.Item>
    ))}
  </SC.List>
  );
};

export default ContactList;
