import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PageControl from './pageControl';

describe('PageControl', () => {
  test('renders with initial values', () => {
    const { getByText } = render(
      <PageControl
        currentPage={3}
        totalPages={5}
        onPageChange={() => {}}
        onPreviousPage={() => {}}
        onNextPage={() => {}}
      />
    );

    expect(getByText('Previous page')).toBeTruthy();
    expect(getByText('Next page')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('of')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
  });

  test('calls onPreviousPage on previous button click', () => {
    const handlePrevious = vi.fn();
    const { getByText } = render(
      <PageControl
        currentPage={3}
        totalPages={5}
        onPageChange={() => {}}
        onPreviousPage={handlePrevious}
        onNextPage={() => {}}
      />
    );

    fireEvent.click(getByText('Previous page'));
    expect(handlePrevious).toBeCalled();
  });

  test('calls onNextPage on next button click', () => {
    const handleNext = vi.fn();
    const { getByText } = render(
      <PageControl
        currentPage={3}
        totalPages={5}
        onPageChange={() => {}}
        onPreviousPage={() => {}}
        onNextPage={handleNext}
      />
    );

    fireEvent.click(getByText('Next page'));
    expect(handleNext).toBeCalled();
  });

  test('calls onPageChange when currentPage exceeds totalPages', () => {
    const handleChange = vi.fn();
    render(
      <PageControl
        currentPage={6}
        totalPages={5}
        onPageChange={handleChange}
        onPreviousPage={() => {}}
        onNextPage={() => {}}
      />
    );

    expect(handleChange).toBeCalledWith(5);
  });

  test('saves currentPage to localStorage', () => {
    render(
      <PageControl
        currentPage={3}
        totalPages={5}
        onPageChange={() => {}}
        onPreviousPage={() => {}}
        onNextPage={() => {}}
      />
    );

    expect(localStorage.getItem('page')).toBe('3');
  });
});
