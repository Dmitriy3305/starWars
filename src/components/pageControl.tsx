import React, { useEffect } from 'react';
import { PageControlProps } from '../types';

const PageControl = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
}: PageControlProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      onPreviousPage();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      onNextPage();
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [totalPages]);

  return (
    <div className="page-control">
      <button onClick={handlePreviousPage}>Previous page;</button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage}>Next page</button>
      <span>of</span>
      <span>{totalPages}</span>
    </div>
  );
};

export default PageControl;
