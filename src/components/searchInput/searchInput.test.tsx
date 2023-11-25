import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchInput from './searchInput';
import store from '../../store/strore';

describe('SearchInput', () => {
  test('renders input with initial search term', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search term');
    expect(inputElement).toBeInTheDocument();
  });

  test('dispatches setSearchTerm action on input change', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search term');
    fireEvent.change(inputElement, { target: { value: 'new search term' } });
  });
});
