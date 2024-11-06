import React, { useState } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./DeviceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { uploadData } from "../../features/deviceSlice";

const optionsDevice = [
  { label: "Kiosk", value: "kiosk" },
  { label: "Display counter", value: "displaycounter" },
];
const serviceOptions = [
  { label: "Dịch vụ 1", value: "service1" },
  { label: "Dịch vụ 2", value: "service2" },
  { label: "Dịch vụ 3", value: "service3" },
];

const DeviceAdd = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.device);

  // State variables
  const [deviceCode, setDeviceCode] = useState<string>("");
  const [deviceName, setDeviceName] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const [deviceType, setDeviceType] = useState<string>("");
  const [accountName, setAccountName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]); // State for selected services
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // State for dropdown visibility

  const handleSelectDeviceType = (value: string) => {
    setDeviceType(value); // Set the selected device type to state
  };

  const handleServiceSelect = (value: string) => {
    if (!selectedServices.includes(value)) {
      setSelectedServices([...selectedServices, value]); // Add selected service to state
      setServiceName((prev) => (prev ? `${prev}, ${value}` : value)); // Update input value
    }
  };

  const handleSelect = (value: string) => {
    setDeviceType(value); // Set the selected device type to state
  };

  const cancelPage = () => {
    navigate("/device");
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all required fields are filled
    if (
      !deviceCode ||
      !deviceName ||
      !ipAddress ||
      !serviceName ||
      !deviceType ||
      !accountName
    ) {
      alert("Please fill in all fields."); // Notify the user to complete all fields
      return;
    }

    const dataToUpload = {
      deviceCode,
      deviceName,
      ipAddress,
      serviceName,
      accountName,
      deviceType,
      password,
      status: "Hoạt động",
      connection: "Mất kết nối",
    };

    console.log("Uploading data:", dataToUpload); // Log the data being uploaded
    dispatch(uploadData(dataToUpload)); // Dispatch the upload action

    // Reset input values after upload
    setDeviceCode("");
    setDeviceName("");
    setIpAddress("");
    setServiceName("");
    setDeviceType("");
    setAccountName("");
    setPassword("");

    // Navigate back to device page
    navigate("/device");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý thiết bị
          </h3>
          <div className="row">
            <div className="col-md-12 device-add-main">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin thiết bị
                </h5>
                <div className="col-md-6 device-add-form">
                  <form onSubmit={handleUpload}>
                    <div className="form-group">
                      <label className="label" htmlFor="mathietbi">
                        Mã thiết bị: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mathietbi"
                        name="mathietbi"
                        placeholder="Nhập mã thiết bị"
                        value={deviceCode}
                        onChange={(e) => setDeviceCode(e.target.value)} // Handle change
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="tenthietbi">
                        Tên thiết bị:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenthietbi"
                        name="tenthietbi"
                        placeholder="Nhập tên thiết bị"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)} // Handle change
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="diachiip">
                        Địa chỉ IP: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="diachiip"
                        name="diachiip"
                        placeholder="Nhập địa chỉ IP"
                        value={ipAddress}
                        onChange={(e) => setIpAddress(e.target.value)} // Handle change
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6 device-add-form">
                  <form onSubmit={handleUpload}>
                    <div className="form-group">
                      <label className="label" htmlFor="loaithietbi">
                        Loại thiết bị:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <br />
                      <CustomDropdown
                        options={optionsDevice}
                        onSelect={handleSelect}
                        style={{ width: "100%", height: "38px" }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="tendangnhap">
                        Tên đăng nhập:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tendangnhap"
                        name="tendangnhap"
                        placeholder="Nhập tài khoản"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)} // Handle change
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="matkhau">
                        Mật khẩu: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="password" // Changed to password type for security
                        className="form-control"
                        id="matkhau"
                        name="matkhau"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Handle change
                      />
                    </div>
                  </form>
                </div>
                <div className="form-group device-add-form">
                  <label className="label" htmlFor="dichvusudung">
                    Dịch vụ sử dụng: <span style={{ color: "#FF4747" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dichvusudung"
                    name="dichvusudung"
                    placeholder="Nhập dịch vụ sử dụng"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)} // Handle change
                    onClick={() => setShowDropdown(true)} // Show dropdown on click
                  />
                  {showDropdown && (
                    <div className="dropdown-menu">
                      {serviceOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleServiceSelect(option.value)}
                          className="dropdown-item"
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p>
                <span style={{ color: "#FF4747" }}>*</span>Là trường thông tin
                bắt buộc
              </p>
            </div>
          </div>
          <div className="btn-form-footer d-flex align-items-center justify-content-center">
            <div className="btn-form-footer-cancel p-2" onClick={cancelPage}>
              <ButtonFormCancel btn_name="Hủy bỏ" />
            </div>
            <div className="btn-form-footer-add p-2" onClick={handleUpload}>
              <ButtonFormAdd btn_name="Thêm thiết bị" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceAdd;
