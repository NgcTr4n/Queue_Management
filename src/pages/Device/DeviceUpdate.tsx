import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./DeviceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import { useNavigate, useParams } from "react-router-dom";

type DeviceData = {
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  services: string;
  deviceType: string;
  accountName: string;
  password: string;
};

const optionsDevice = [
  { label: "Kiosk", value: "kiosk" },
  { label: "Display counter", value: "displaycounter" },
];

const DeviceUpdate = () => {
  const { deviceCode } = useParams<{ deviceCode: string }>(); // Assume `deviceCode` is passed via URL
  const navigate = useNavigate();
  const [deviceData, setDeviceData] = useState<DeviceData>({
    deviceCode: "",
    deviceName: "",
    ipAddress: "",
    services: "",
    deviceType: "",
    accountName: "",
    password: "",
  });

  useEffect(() => {
    // Replace with actual API call to fetch device by `deviceCode`
    const fetchDeviceData = async () => {
      const mockData = {
        deviceCode: deviceCode || "DEV001",
        deviceName: "Sample Device",
        ipAddress: "192.168.1.1",
        services: "Service A, Service B",
        deviceType: "kiosk",
        accountName: "admin",
        password: "password123",
      };
      setDeviceData(mockData);
    };
    fetchDeviceData();
  }, [deviceCode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeviceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelect = (value: string) => {
    setDeviceData((prevData) => ({ ...prevData, deviceType: value }));
  };

  const cancelPage = () => {
    navigate("/device");
  };

  const updateDevice = () => {
    // Replace with actual API call to update device
    console.log("Updated device data:", deviceData);
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
                  <div className="form-group">
                    <label className="label" htmlFor="deviceCode">
                      Mã thiết bị: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deviceCode"
                      name="deviceCode"
                      value={deviceData.deviceCode}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="deviceName">
                      Tên thiết bị: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deviceName"
                      name="deviceName"
                      value={deviceData.deviceName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="ipAddress">
                      Địa chỉ IP: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ipAddress"
                      name="ipAddress"
                      value={deviceData.ipAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 device-add-form">
                  <div className="form-group">
                    <label className="label" htmlFor="deviceType">
                      Loại thiết bị: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <br />
                    <CustomDropdown
                      options={optionsDevice}
                      selectedValue={deviceData.deviceType}
                      onSelect={handleSelect}
                      style={{ width: "100%", height: "38px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="accountName">
                      Tên đăng nhập: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountName"
                      name="accountName"
                      value={deviceData.accountName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor="password">
                      Mật khẩu: <span style={{ color: "#FF4747" }}>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={deviceData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group device-add-form">
                  <label className="label" htmlFor="services">
                    Dịch vụ sử dụng: <span style={{ color: "#FF4747" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="services"
                    name="services"
                    value={deviceData.services}
                    onChange={handleInputChange}
                  />
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
            <div className="btn-form-footer-add p-2" onClick={updateDevice}>
              <ButtonFormAdd btn_name="Cập nhật thiết bị" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceUpdate;
