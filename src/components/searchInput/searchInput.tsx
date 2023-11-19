import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../reducers/searchReducer';
import { RootState } from '../../reducers/rootReducer';
const SearchInput = () => {
  const searchTerm = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const handleInputChange = (searchTerm: string) => {
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder="Search term"
      className="search-input"
    />
  );
};

export default SearchInput;
