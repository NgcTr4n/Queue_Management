import React, { useEffect, useState } from "react";
import "./Header.css";
import { breadcrumbPaths, useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar/ava1.jpg";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { auth } from "../../services/firebase";
import { fetchAccountByEmail } from "../../features/accountSlice";

const Header: React.FC = () => {
  const { breadcrumbs } = useBreadcrumbs();
  const currentPaths = breadcrumbPaths[window.location.pathname] || [];
  const navigate = useNavigate();
  const showAccountInform = () => {
    navigate("/account");
  };
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch type
  const [userData, setUserData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    accountName: "",
    password: "",
    roleName: "",
  });

  useEffect(() => {
    const fetchAccount = async () => {
      const user = auth.currentUser; // Get the current user

      if (user && user.email) {
        // Check if user is not null and has an email
        try {
          const account = await dispatch(
            fetchAccountByEmail(user.email)
          ).unwrap();
          setUserData(account);
        } catch (error) {
          console.error("Error fetching account:", error);
        }
      } else {
        console.log("No user is signed in or user has no email.");
      }
    };

    fetchAccount();
  }, [dispatch]);
  return (
    <div className="main-header">
      <div className="header-crumbs">
        <h5 className="display-5" style={{ color: "#FF9138" }}>
          {breadcrumbs.length > 0 ? (
            breadcrumbs.map((item, index) => {
              const currentPath = currentPaths[index] || "#";
              return (
                <span key={index} className="breadcrumb-item">
                  {index === 0 || index === breadcrumbs.length - 1 ? (
                    <span
                      className={
                        index === breadcrumbs.length - 1
                          ? "breadcrumb-active"
                          : ""
                      }
                    >
                      {item}
                    </span>
                  ) : (
                    <Link to={currentPath} className="breadcrumb-link">
                      {item}
                    </Link>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M12.3583 9.6154L8.82495 6.08207C8.74748 6.00396 8.65532 5.94197 8.55377 5.89966C8.45222 5.85735 8.3433 5.83557 8.23329 5.83557C8.12328 5.83557 8.01435 5.85735 7.91281 5.89966C7.81126 5.94197 7.71909 6.00396 7.64162 6.08207C7.48641 6.23821 7.39929 6.44942 7.39929 6.66957C7.39929 6.88972 7.48641 7.10093 7.64162 7.25707L10.5916 10.2071L7.64162 13.1571C7.48641 13.3132 7.39929 13.5244 7.39929 13.7446C7.39929 13.9647 7.48641 14.1759 7.64162 14.3321C7.71949 14.4093 7.81183 14.4704 7.91336 14.5119C8.01489 14.5534 8.12361 14.5744 8.23329 14.5737C8.34296 14.5744 8.45168 14.5534 8.55321 14.5119C8.65474 14.4704 8.74709 14.4093 8.82495 14.3321L12.3583 10.7987C12.4364 10.7213 12.4984 10.6291 12.5407 10.5276C12.583 10.426 12.6048 10.3171 12.6048 10.2071C12.6048 10.0971 12.583 9.98814 12.5407 9.88659C12.4984 9.78504 12.4364 9.69287 12.3583 9.6154Z"
                        fill="#7E7D88"
                      />
                    </svg>
                  )}
                </span>
              );
            })
          ) : (
            <span className="breadcrumb-item">No breadcrumbs available</span>
          )}
        </h5>
      </div>

      <div className="header-inform">
        <div className="header-bell">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M16.1167 12.282L15.2833 10.8987C15.1083 10.5903 14.95 10.007 14.95 9.66532V7.55699C14.95 5.59866 13.8 3.90699 12.1417 3.11532C11.7083 2.34866 10.9083 1.87366 9.99166 1.87366C9.08333 1.87366 8.26666 2.36532 7.83333 3.14032C6.20833 3.94866 5.08333 5.62366 5.08333 7.55699V9.66532C5.08333 10.007 4.92499 10.5903 4.74999 10.8903L3.90833 12.282C3.57499 12.8403 3.49999 13.457 3.70833 14.0237C3.90833 14.582 4.38333 15.0153 4.99999 15.2237C6.61666 15.7737 8.31666 16.0403 10.0167 16.0403C11.7167 16.0403 13.4167 15.7737 15.0333 15.232C15.6167 15.0403 16.0667 14.5987 16.2833 14.0237C16.5 13.4487 16.4417 12.8153 16.1167 12.282Z"
              fill="#FFAC6A"
            />
            <path
              d="M12.3584 16.882C12.0084 17.8487 11.0834 18.5403 10 18.5403C9.34169 18.5403 8.69169 18.2737 8.23336 17.7987C7.96669 17.5487 7.76669 17.2153 7.65002 16.8737C7.75836 16.8903 7.86669 16.8987 7.98336 16.9153C8.17502 16.9403 8.37502 16.9653 8.57502 16.982C9.05002 17.0237 9.53336 17.0487 10.0167 17.0487C10.4917 17.0487 10.9667 17.0237 11.4334 16.982C11.6084 16.9653 11.7834 16.957 11.95 16.932C12.0834 16.9153 12.2167 16.8987 12.3584 16.882Z"
              fill="#FFAC6A"
            />
          </svg>{" "}
        </div>
        <img
          onClick={showAccountInform}
          src={avatar}
          alt="Avatar"
          className="header-avatar"
        />
        <div className="header-content">
          <span className="header-greeting">Xin chào</span>
          <span className="header-username">
            {" "}
            {userData.fullName || "Phạm Võ Ngọc Trân"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
