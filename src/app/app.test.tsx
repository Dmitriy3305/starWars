import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import store from '../store/strore';

describe('App', () => {
  test('renders h1 element', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headingElement = screen.getByText('Star Wars Characters');
    expect(headingElement).toBeInTheDocument();
  });

  test('performs search', async () => {
    const fetchMocker = createFetchMock(vi);
    fetchMocker.doMock(JSON.stringify({ results: [] }));
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
  });

  test('changes page', async () => {
    const fetchMocker = createFetchMock(vi);
    fetchMocker.doMock(JSON.stringify({ results: [] }));
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const nextButton = screen.getByText('Next page');
    fireEvent.click(nextButton);
  });
});
