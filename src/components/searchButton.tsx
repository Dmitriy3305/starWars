import React from 'react';
import { SearchButtonProps } from '../types';

class SearchButton extends React.Component<SearchButtonProps> {
  render() {
    const { onClick } = this.props;

    return (
      <button className="search-button" onClick={onClick}>
        Search
      </button>
    );
  }
}

export default SearchButton;
