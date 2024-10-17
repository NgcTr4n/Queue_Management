import React from 'react';
import './SearchInput.css';

interface SearchInputProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="d-flex align-items-center device-input">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="form-control" 
        onChange={handleInputChange}
      />
      <span className="svg-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
};

export default SearchInput;
