import React from "react";
import "./ButtonAdd.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  btn_name: string;
  showPage: string
}

const ButtonAdd: React.FC<ButtonProps> = ({ btn_name, showPage }) => {
    const navigate = useNavigate()
    const showLinkPage = ()=>{
        navigate(showPage)
    }
  return (
    <div className="btn-add">
      <button className="btn-add-new"  onClick={showLinkPage}>

        <svg style={{marginBottom:'4px'}}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M18.8885 2.33325H9.11183C4.86516 2.33325 2.3335 4.86492 2.3335 9.11158V18.8766C2.3335 23.1349 4.86516 25.6666 9.11183 25.6666H18.8768C23.1235 25.6666 25.6552 23.1349 25.6552 18.8883V9.11158C25.6668 4.86492 23.1352 2.33325 18.8885 2.33325ZM18.6668 14.8749H14.8752V18.6666C14.8752 19.1449 14.4785 19.5416 14.0002 19.5416C13.5218 19.5416 13.1252 19.1449 13.1252 18.6666V14.8749H9.3335C8.85516 14.8749 8.4585 14.4783 8.4585 13.9999C8.4585 13.5216 8.85516 13.1249 9.3335 13.1249H13.1252V9.33325C13.1252 8.85492 13.5218 8.45825 14.0002 8.45825C14.4785 8.45825 14.8752 8.85492 14.8752 9.33325V13.1249H18.6668C19.1452 13.1249 19.5418 13.5216 19.5418 13.9999C19.5418 14.4783 19.1452 14.8749 18.6668 14.8749Z"
            fill="#FF9138"
          />
        </svg>
        {btn_name}
      </button>
    </div>
  );
};

export default ButtonAdd;
