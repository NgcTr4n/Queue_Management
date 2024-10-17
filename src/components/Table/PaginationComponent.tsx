// src/PaginationComponent.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="arrow-button"
      >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 7L9 12L15 17" fill="#A9A9B0"/>
  <path d="M15 7L9 12L15 17L15 7Z" stroke="#A9A9B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>      </button>
      {pages.map((page) => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="arrow-button"
      >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 17L15 12L9 7" fill="#7E7D88"/>
  <path d="M9 17L15 12L9 7L9 17Z" stroke="#7E7D88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>      </button>
    </div>
  );
};

export default PaginationComponent;
