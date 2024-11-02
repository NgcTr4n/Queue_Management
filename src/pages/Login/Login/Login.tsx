import React, { useState } from "react";
import logo from "../../../assets/logo/Logo_alta.png";
import loginPic from "../../../assets/login/login_pic.png";
import "./Login.css";
import Button from "../../../components/Button/FilledButton";
import FilledButton from "../../../components/Button/FilledButton";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const data = {
    username: "name1",
    password: "password123",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== data.username || password !== data.password) {
      setError(true);
    } else {
      setError(false);
      console.log("Đăng nhập thành công");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container row">
      <div className="login-left col">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-form-username">
              <label className="label">Tên đăng nhập *</label> <br />
              <input
                type="text"
                placeholder="Tên đăng nhập"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-form-password">
              <label className="label">Mật khẩu *</label>
              <div
                className="password-input-container"
                style={{ position: "relative", width: "100%" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  style={{ paddingRight: "40px" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                  }}
                >
                  {showPassword ? (
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0)"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M2 2L22 22"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                          stroke="#7E7D88"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
              {error && (
                <div className="error-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11_4958)">
                      <path
                        d="M10.2281 18.8332C14.8305 18.8332 18.5614 15.1022 18.5614 10.4998C18.5614 5.89746 14.8305 2.1665 10.2281 2.1665C5.62574 2.1665 1.89478 5.89746 1.89478 10.4998C1.89478 15.1022 5.62574 18.8332 10.2281 18.8332Z"
                        stroke="#E73F3F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.228 13.8335H10.2364"
                        stroke="#E73F3F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.228 7.1665V10.4998"
                        stroke="#E73F3F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_4958">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.228027 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Sai mật khẩu hoặc tên đăng nhập</span>
                </div>
              )}
            </div>
            {error ? (
              <div className="btn-login-error">
                <div className="login-btn">
                  <FilledButton btn_name="Đăng nhập" />
                </div>
                <div
                  className="login-forgot-password"
                  style={{ marginTop: "3px" }}
                >
                  <a href="/forgotpassword">Quên mật khẩu?</a>
                </div>
              </div>
            ) : (
              <div className="btn-login-noterror">
                <div
                  className="login-forgot-password"
                  style={{ marginTop: "8px" }}
                >
                  <a href="/forgotpassword">Quên mật khẩu?</a>
                </div>
                <div className="login-btn">
                  <FilledButton btn_name="Đăng nhập" />
                </div>
              </div>
            )}
            {/* Nút "Đăng nhập" và liên kết "Quên mật khẩu?" */}
          </form>
        </div>
      </div>
      <div className="login-right col">
        <div className="login-right-pic">
          <img src={loginPic} alt="Login Pic" />
        </div>
        <div className="login-right-text">
          <h2 className="display-2">Hệ thống</h2>
          <h1 className="display-1">QUẢN LÝ XẾP HÀNG</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
