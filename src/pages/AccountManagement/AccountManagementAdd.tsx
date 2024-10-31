import React, { useState } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
const optionsRole = [
  { label: "Kiosk", value: "kiosk" },
  { label: "Display counter", value: "displaycounter" },
];
const optionsStatus = [
  { label: "Hoạt đông", value: "hoatdong" },
  { label: "Ngưng hoạt động", value: "ngưnghoatdong" },
];
const AccountManagementAdd = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý tài khoản
          </h3>{" "}
          <div className="row">
            <div className="col-md-12  device-add-main">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin tài khoản
                </h5>
                <div className="col-md-6 device-add-form">
                  <form action="">
                    <div className="form-group">
                      <label className="label" htmlFor="hoten">
                        Họ tên: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="hoten"
                        name="hoten"
                        placeholder="Nhập họ tên"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="sodienthoai">
                        Số điện thoại:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sodienthoai"
                        name="sodienthoai"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="email">
                        Email: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="vaitro">
                        Vai trò: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <CustomDropdown
                        options={optionsRole}
                        onSelect={handleSelect}
                        style={{ width: "100%", height: "38px" }}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6 device-add-form">
                  <form action="">
                    <div className="form-group">
                      <label className="label" htmlFor="tendangnhap">
                        Tên đăng nhập:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="tendangnhap"
                        name="tendangnhap"
                        placeholder="Nhập tên đăng nhập"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="matkhau">
                        Mật khẩu: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <div
                        className="password-input-container"
                        style={{ position: "relative", width: "100%" }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="matkhau"
                          name="matkhau"
                          placeholder="Nhập mật khẩu"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
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
                    <div className="form-group">
                      <label className="label" htmlFor="nhaplaimatkhau">
                        Nhập lại mật khẩu:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <div
                        className="password-input-container"
                        style={{ position: "relative", width: "100%" }}
                      >
                        <input
                          type={showRePassword ? "text" : "password"}
                          className="form-control"
                          id="nhaplaimatkhau"
                          name="nhaplaimatkhau"
                          value={rePassword}
                          onChange={(e) => setRePassword(e.target.value)}
                          placeholder="Nhập lại mật khẩu"
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
                          {showRePassword ? (
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
                    <div className="form-group">
                      <label className="label" htmlFor="vaitro">
                        Tình trạng: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <CustomDropdown
                        options={optionsStatus}
                        onSelect={handleSelect}
                        style={{ width: "100%", height: "38px" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <p>
                <span style={{ color: "#FF4747" }}>*</span>Là trường thông tin
                bắt buộc
              </p>
            </div>
          </div>
          <div className="btn-form-footer d-flex align-items-center justify-content-center">
            <div className="btn-form-footer-cancel p-2">
              <ButtonFormCancel btn_name="Hủy bỏ" />
            </div>
            <div className="btn-form-footer-add p-2">
              <ButtonFormAdd btn_name="Thêm" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountManagementAdd;
