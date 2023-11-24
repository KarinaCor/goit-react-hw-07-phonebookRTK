import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../Filter/Filter.styled';
import { getFilter } from 'redux/filter/filter.selector';
import { filterChange } from 'redux/filter/filter.slice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const filterContacts = evt => {
    const filterValue = evt.currentTarget.value.toLowerCase().trim();
    dispatch(filterChange(filterValue));
  };
  return (
    <SC.Wrapper>
      <SC.Label>
        Find contacts by name
        <SC.Input
          type="text"
          name="filter"
          value={value}
          onChange={filterContacts}
        />
      </SC.Label>
    </SC.Wrapper>
  );
};

export default Filter;
