import React, { useState } from "react";
import "./CustomDropdown.css"; // Add styles here

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [selected, setSelected] = useState(options[0].label); // Default to the first option
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelected(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="custom-dropdown-toggle">
        {selected}
        <span className="custom-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 9L12 15L18 9" fill="#FF7506" />
            <path
              d="M6 9L12 15L18 9H6Z"
              stroke="#FF7506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className="custom-dropdown-menu" style={{ listStyleType: "none" }}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-dropdown-item ${
                selected === option.label ? "active" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
