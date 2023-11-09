import { useContext } from 'react';
import GlobalContext from './globalContext';
import { SearchInputProps } from '../types';

const SearchInput = (props: SearchInputProps) => {
  const { handleInputChange } = props;
  const context = useContext(GlobalContext);

  return (
    <input
      type="text"
      value={context.searchTerm}
      onChange={handleInputChange}
      placeholder="Search term"
      className="search-input"
    />
  );
};

export default SearchInput;
