import React from 'react';

interface IPaginationData {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationLink: React.FC<IPaginationData> = ({ currentPage, totalPages, onPageChange }) => {
  const displayRange = 2; // Number of pages to show before and after the current page
  const pages: (number | string)[] = [];
  
  const addRange = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  };
  
  const addPage = (pageNumber: number) => {
    if(!pages.includes(pageNumber)){
      pages.push(pageNumber);
    }
  };
  
  if (totalPages <= 10) {
    addRange(1, totalPages);
  } else {
    addPage(1);
    
    if (currentPage - displayRange > 2) {
      pages.push('...');
      addRange(currentPage - displayRange, currentPage - 1);
    } else {
      addRange(2, currentPage - 1);
    }
    
    addPage(currentPage);
    
    if (currentPage + displayRange < totalPages - 1) {
      addRange(currentPage + 1, currentPage + displayRange);
      pages.push('...');
    } else {
      addRange(currentPage + 1, totalPages - 1);
    }
    
    addPage(totalPages);
  }
  
  return (
    <ul className="flex">
      {pages.map((page, index) => (
        <li
          key={index}
          className={`cursor-pointer p-2 hover:text-pallet-orange ${
            page === '...' ? 'mx-1' : ''
          } ${page === currentPage ? 'font-bold' : ''}`}
          onClick={() => {
            if (typeof page === 'number') {
              onPageChange(page);
            }
          }}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default PaginationLink;
