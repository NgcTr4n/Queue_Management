import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
type LevelDetailProps = {
  serialNumber: string;
  customerName: string;
  serviceName: string;
  issueTime: string;
  expirationTime: string;
  statusLevel: string;
  source: string;
  phoneNumber: string;
  email: string;
};

const LevelDetail: React.FC = () => {
  const { serialNumber } = useParams<{ serialNumber: string }>();

  const allData: LevelDetailProps[] = [
    {
      serialNumber: "2010001",
      customerName: "Lê Huỳnh Ái Vân",
      serviceName: "Khám tim mạch",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đang chờ",
      source: "Kiosk",
      phoneNumber: "0901234567",
      email: "vanlehuynhai@gmail.com",
    },
    {
      serialNumber: "2010002",
      customerName: "Nguyễn Văn A",
      serviceName: "Khám tim mạch",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đã sử dụng,",
      source: "Kiosk",
      phoneNumber: "0901234567",
      email: "vanlehuynhai@gmail.com",
    },
    {
      serialNumber: "2010003",
      customerName: "Nguyễn Văn B",
      serviceName: "Khám tim mạch",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đang chờ",
      source: "Kiosk",
      phoneNumber: "0901234567",
      email: "vanlehuynhai@gmail.com",
    },
    {
      serialNumber: "2010004",
      customerName: "Nguyễn Văn C",
      serviceName: "Khám tim mạch",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đang chờ",
      source: "Kiosk",
      phoneNumber: "0901234567",
      email: "vanlehuynhai@gmail.com",
    },
  ];

  const device = allData.find((item) => item.serialNumber === serialNumber);

  if (!device) {
    return <div>Device not found</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý cấp số
          </h3>{" "}
          <div className="row device-detail-main">
            <div className="col-md-12">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin cấp số
                </h5>
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-md-6">
                    <p className="device-detail">
                      <div className="row">
                        <div className="col">
                          <strong>Họ tên:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.customerName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên dịch vụ:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.serviceName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Số thứ tự:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.serialNumber}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Thời gian cấp:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.issueTime}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Hạn sử dụng:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.expirationTime}
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="col-md-6 device-detail">
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Nguồn cấp:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.source}
                        </div>
                      </div>
                    </p>
                    <p>
                      {" "}
                      <div className="row">
                        <div className="col">
                          <strong>Trạng thái:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.statusLevel}
                        </div>
                      </div>
                    </p>
                    <p>
                      {" "}
                      <div className="row">
                        <div className="col">
                          <strong>Số điện thoại:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {" "}
                          {device.phoneNumber}
                        </div>
                      </div>
                    </p>
                    <p>
                      {" "}
                      <div className="row">
                        <div className="col">
                          <strong>Địa chỉ Email:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {" "}
                          {device.email}
                        </div>
                      </div>
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

export default LevelDetail;
