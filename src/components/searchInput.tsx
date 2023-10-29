import React from 'react';
import { SearchInputProps } from '../types';

class SearchInput extends React.Component<SearchInputProps> {
  render() {
    const { searchTerm, handleInputChange } = this.props;

    return (
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search term"
        className="search-input"
      />
    );
  }
}

export default SearchInput;
