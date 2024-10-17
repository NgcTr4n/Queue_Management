import React from "react";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/")
    }

  return (
    <div className="btn">
      <button className="btn-logout" onClick={handleLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M13.3334 14.3737L17.5 10.2071L13.3334 6.04041"
            stroke="#FF7506"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 10.207H7.5"
            stroke="#FF7506"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 17.707H4.16667C3.72464 17.707 3.30072 17.5314 2.98816 17.2189C2.67559 16.9063 2.5 16.4824 2.5 16.0404V4.3737C2.5 3.93167 2.67559 3.50775 2.98816 3.19519C3.30072 2.88263 3.72464 2.70703 4.16667 2.70703H7.5"
            stroke="#FF7506"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Đăng xuất
      </button>
    </div>
  );
};

export default LogoutButton;
