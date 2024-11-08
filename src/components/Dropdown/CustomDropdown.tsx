import React, { useState } from "react";
import "./CustomDropdown.css"; // Add styles here

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  selectedValue?: string;
  style?: React.CSSProperties;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options = [],
  onSelect,
  selectedValue,
  style,
}) => {
  const [selected, setSelected] = useState<string>(
    selectedValue ||
      (options.length > 0 ? options[0].label : "Select an option")
  );
  const [isOpen, setIsOpen] = useState(false);

  if (options.length === 0) {
    return <div>No options available</div>;
  }
  const handleSelect = (option: Option) => {
    setSelected(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className={`custom-dropdown ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      style={style}
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
