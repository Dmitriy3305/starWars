import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from './searchButton';

describe('SearchButton', () => {
  test('renders Search button', () => {
    const onClickMock = vi.fn();
    render(<SearchButton onClick={onClickMock} />);
    const buttonElement = screen.getByText('Search');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('search-button');
  });

  test('calls onClick handler when button is clicked', () => {
    const onClickMock = vi.fn();
    render(<SearchButton onClick={onClickMock} />);
    const buttonElement = screen.getByText('Search');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
