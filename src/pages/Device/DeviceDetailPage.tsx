import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import "./DeviceDetailPage.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../hooks/hooks";

type DeviceDetailProps = {
  id: string;
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  services: string;
  deviceType: string;
  accountName: string;
  password: string;
};

const DeviceDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { device, loading, error } = useAppSelector((state) => state.device);
  const { id } = useParams<{ id: string }>();

  // Check if device is loaded
  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure device is an array and find the specific device by id
  const allDevice = Array.isArray(device)
    ? device.find((item) => item.id === id)
    : null;

  // If no device is found, return a message
  if (!allDevice) {
    return <div>Device not found</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý thiết bị
          </h3>
          <div className="row device-detail-main">
            <div className="col-md-12">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin thiết bị
                </h5>
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-md-6">
                    <p className="device-detail">
                      <div className="row">
                        <div className="col">
                          <strong>Mã thiết bị:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.deviceCode}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên thiết bị:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.deviceName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Địa chỉ IP:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.ipAddress}
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="col-md-6 device-detail">
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Loại thiết bị:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.deviceType}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên đăng nhập:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.accountName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Mật khẩu:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allDevice.password}
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 device-detail">
                    <strong>Dịch vụ sử dụng:</strong>
                    <br />
                    <span style={{ color: "#535261" }}>
                      {allDevice.serviceName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceDetailPage;
function fetchServices(): any {
  throw new Error("Function not implemented.");
}
