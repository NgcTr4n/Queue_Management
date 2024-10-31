import React, { useState } from "react";
type CheckboxGroupProps = {
  title: string;
  options: string[];
};
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options }) => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    all: false,
    ...options.reduce((acc, option) => ({ ...acc, [option]: false }), {}),
  });
  const handleCheck = (option: string) => {
    setChecked((prev) => {
      const newChecked = { ...prev, [option]: !prev[option] };

      // Toggle "All" checkbox if all individual options are checked
      if (option === "all") {
        const allChecked = !prev.all;
        options.forEach((opt) => (newChecked[opt] = allChecked));
      } else {
        newChecked.all = options.every((opt) => newChecked[opt]);
      }

      return newChecked;
    });
  };
  return (
    <div className="mb-3">
      <h5 className="display-5" style={{ color: "#FF7506" }}>
        {title}
      </h5>
      <div className="form-check align-item-center justify-content-start">
        <input
          type="checkbox"
          className="form-check-input"
          id={`${title}-all`}
          checked={checked.all}
          onChange={() => handleCheck("all")}
        />
        <label
          className="form-check-label"
          htmlFor={`${title}-all`}
          style={{ color: "#535261", marginLeft: "8px" }}
        >
          Tất cả
        </label>
      </div>
      {options.map((option) => (
        <div
          key={option}
          className="form-check d-flex- align-item-center justify-content-start"
        >
          <input
            type="checkbox"
            className="form-check-input"
            id={`${title}-${option}`}
            checked={checked[option]}
            onChange={() => handleCheck(option)}
          />
          <label
            style={{ color: "#535261", marginLeft: "8px" }}
            className="form-check-label"
            htmlFor={`${title}-${option}`}
          >
            Chức năng {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
