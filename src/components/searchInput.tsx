import { SearchInputProps } from '../types';

const SearchInput = (props: SearchInputProps) => {
  const { searchTerm, handleInputChange } = props;

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search term"
      className="search-input"
    />
  );
};

export default SearchInput;
