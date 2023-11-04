import React, { useEffect } from 'react';
import { PageControlProps } from '../types';

const PageControl = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
}: PageControlProps) => {
  useEffect(() => {
    if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [totalPages]);

  return (
    <div className="page-control">
      <button onClick={onPreviousPage}>Previous page;</button>
      <span>{currentPage}</span>
      <button onClick={onNextPage}>Next page</button>
      <span>of</span>
      <span>{totalPages}</span>
    </div>
  );
};

export default PageControl;
