import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import "./DeviceDetailPage.css";
type DeviceDetailProps = {
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  services: string;
  deviceType: string;
  accountName: string;
  password: string;
};

const DeviceDetailPage: React.FC = () => {
  const { deviceCode } = useParams<{ deviceCode: string }>();

  const allData: DeviceDetailProps[] = [
    {
      deviceCode: "KIO_01",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.10",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services:
        "Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.",
    },
    {
      deviceCode: "KIO_02",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.11",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_03",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.12",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám mắt...",
    },
    {
      deviceCode: "KIO_04",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.13",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_05",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.14",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám mắt...",
    },
    {
      deviceCode: "KIO_06",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.15",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tổng quát, Khám tai mũi họng...",
    },
    {
      deviceCode: "KIO_07",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.16",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám sức khỏe, Khám nội tiết...",
    },
    {
      deviceCode: "KIO_08",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.17",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám da liễu...",
    },
    {
      deviceCode: "KIO_09",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.18",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_10",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.19",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám tâm lý...",
    },
    {
      deviceCode: "KIO_11",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.20",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám nội tiết, Khám phụ khoa...",
    },
    {
      deviceCode: "KIO_12",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.21",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tổng quát, Khám mắt...",
    },
    {
      deviceCode: "KIO_13",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.22",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám thần kinh...",
    },
    {
      deviceCode: "KIO_14",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.23",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_15",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.24",
      deviceType: "Kiosk",
      accountName: "Linhkyo011",
      password: "CMS",
      services: "Khám tim mạch, Khám tiêu hóa...",
    },
  ];

  const device = allData.find((item) => item.deviceCode === deviceCode);

  if (!device) {
    return <div>Device not found</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý thiết bị
          </h3>{" "}
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
                          {device.deviceCode}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên thiết bị:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.deviceName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Địa chỉ IP:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.ipAddress}
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
                          {device.deviceType}
                        </div>
                      </div>
                    </p>
                    <p>
                      {" "}
                      <div className="row">
                        <div className="col">
                          <strong>Tên đăng nhập:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.accountName}
                        </div>
                      </div>
                    </p>
                    <p>
                      {" "}
                      <div className="row">
                        <div className="col">
                          <strong>Mật khẩu:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {" "}
                          {device.password}
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 device-detail">
                    <p>
                      <strong>Dịch vụ sử dụng:</strong> <br />{" "}
                      <span style={{ color: "#535261" }}>
                        {device.services}
                      </span>
                    </p>
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
