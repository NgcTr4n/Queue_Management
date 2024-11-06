import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/Logo_alta.png";
import loginpassPic from "../../../assets/login/login_pass.png";
import "./ForgotPassword.css";
import FilledButton from "../../../components/Button/FilledButton";
import BorderButton from "../../../components/Button/BorderButton";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../../services/firebase"; // Import your Firebase config
import { getAuth, confirmPasswordReset } from "firebase/auth";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { oobCode } = useParams<{ oobCode?: string }>();
  const navigate = useNavigate();
  const auth = getAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    console.log("Current URL:", window.location.href);
    console.log("oobCode:", oobCode);
  }, [oobCode]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oobCode) {
      setError("Mã xác thực không hợp lệ.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Mật khẩu phải ít nhất 6 ký tự.");
      return;
    }

    if (newPassword !== rePassword) {
      setError("Mật khẩu và Nhập lại mật khẩu không khớp.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccessMessage("Mật khẩu đã được đặt lại thành công!");
      navigate("/login"); // Redirect to login page after success
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          {!isFormSubmitted ? (
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (validateEmail(email)) {
                  setIsFormSubmitted(true);
                  setError(""); // Clear error
                } else {
                  setError("Email không hợp lệ.");
                }
              }}
            >
              <div className="login-form-username">
                <h4>Đặt lại mật khẩu</h4>
                <label className="label">
                  Vui lòng nhập email để đặt lại mật khẩu của bạn *
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                    <span> Email không hợp lệ</span>
                  </div>
                )}
              </div>
              <div className="btn-form">
                <div className="btn-form-border">
                  <BorderButton btn_name="Hủy" link="/" />
                </div>
                <div className="btn-form-filled">
                  <FilledButton btn_name="Tiếp tục" />
                </div>
              </div>
            </form>
          ) : (
            <form className="login-form" onSubmit={handlePasswordReset}>
              <div className="login-form-username">
                <h4 className="display-4">Đặt lại mật khẩu mới</h4>
                <div className="login-form-password">
                  <label className="label">Mật khẩu</label>
                  <div
                    className="password-input-container"
                    style={{ position: "relative", width: "100%" }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu"
                      style={{ paddingRight: "40px" }}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
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
                </div>
                <div className="login-form-password">
                  <label className="label">Nhập lại mật khẩu </label>
                  <div
                    className="password-input-container"
                    style={{ position: "relative", width: "100%" }}
                  >
                    <input
                      type={showRePassword ? "text" : "password"}
                      placeholder="Nhập lại mật khẩu"
                      style={{ paddingRight: "40px" }}
                      value={rePassword}
                      onChange={(e) => setRePassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={toggleRePasswordVisibility}
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
                  {/* {passwordError && (
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
                      <span> Mật khẩu không khớp</span>
                    </div>
                  )} */}
                </div>
              </div>
              <div className="btn-repass">
                <FilledButton btn_name="Xác nhận" />
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="forgetpass-right">
        <img src={loginpassPic} alt="Login Pic" />
      </div>
    </div>
  );
};

export default ForgotPassword;
