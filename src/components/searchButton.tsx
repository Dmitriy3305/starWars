import { SearchButtonProps } from '../types';

const SearchButton = (props: SearchButtonProps) => {
  const { onClick } = props;
  return (
    <button className="search-button" onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;
