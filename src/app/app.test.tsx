import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import 'isomorphic-fetch';

describe('App', () => {
  test('renders h1 element', () => {
    render(<App />);
    const headingElement = screen.getByText('Star Wars Characters');
    expect(headingElement).toBeInTheDocument();
  });

  test('performs search', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search term');
    const searchButton = screen.getByText('Search');
    fireEvent.change(searchInput, { target: { value: 'Luke Skywalker' } });
    fireEvent.click(searchButton);
  });

  test('changes page', () => {
    const fetchMocker = createFetchMock(vi);
    fetchMocker.doMock(JSON.stringify({ results: [] }));
    render(<App />);
    const nextButton = screen.getByText('Next page');
    fireEvent.click(nextButton);
  });
});
