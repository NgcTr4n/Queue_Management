import React, { useState } from "react";
import Layout from "../../layout/Layout";
import "./Device.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";
const sampleDevices = [
  {
    deviceCode: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.10",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tim mạch, Khám mắt...",
  },
  {
    deviceCode: "KIO_02",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.11",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám sức khỏe, Khám mắt...",
  },
  {
    deviceCode: "KIO_03",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.12",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tim mạch, Khám mắt...",
  },
  {
    deviceCode: "KIO_04",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.13",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám sức khỏe, Khám mắt...",
  },
  {
    deviceCode: "KIO_05",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.14",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám tim mạch, Khám mắt...",
  },
  {
    deviceCode: "KIO_06",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.15",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tổng quát, Khám tai mũi họng...",
  },
  {
    deviceCode: "KIO_07",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.16",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám sức khỏe, Khám nội tiết...",
  },
  {
    deviceCode: "KIO_08",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.17",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tim mạch, Khám da liễu...",
  },
  {
    deviceCode: "KIO_09",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.18",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám sức khỏe, Khám mắt...",
  },
  {
    deviceCode: "KIO_10",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.19",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tim mạch, Khám tâm lý...",
  },
  {
    deviceCode: "KIO_11",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.20",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám nội tiết, Khám phụ khoa...",
  },
  {
    deviceCode: "KIO_12",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.21",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám tổng quát, Khám mắt...",
  },
  {
    deviceCode: "KIO_13",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.22",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám tim mạch, Khám thần kinh...",
  },
  {
    deviceCode: "KIO_14",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.23",
    status: "Hoạt động",
    connection: "Kết nối",
    services: "Khám sức khỏe, Khám mắt...",
  },
  {
    deviceCode: "KIO_15",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.24",
    status: "Ngưng hoạt động",
    connection: "Mất kết nối",
    services: "Khám tim mạch, Khám tiêu hóa...",
  },
];
const optionActive = [
  { label: "Tất cả", value: "tatca" },
  { label: "Hoạt động", value: "hoatdong" },
  { label: "Ngưng hoạt động", value: "ngunghoatdong" },
];

const optionConnection = [
  { label: "Tất cả", value: "tatca" },
  { label: "Kết nối", value: "ketnoi" },
  { label: "Mất kết nối", value: "matketnoi" },
];

const Device = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("tatca");
  const [selectedConnection, setSelectedConnection] = useState("tatca");

  const handleSelectStatus = (value: string) => {
    setSelectedStatus(value);
    console.log("Selected status:", value);
  };

  const handleSelectConnection = (value: string) => {
    setSelectedConnection(value);
    console.log("Selected connection:", value);
  };
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Search input:", value);
  };

  const filteredDevices = sampleDevices.filter((device) => {
    const matchesSearchTerm =
      device.deviceCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "tatca" ||
      (selectedStatus === "hoatdong" && device.status === "Hoạt động") ||
      (selectedStatus === "ngunghoatdong" &&
        device.status === "Ngưng hoạt động");

    const matchesConnection =
      selectedConnection === "tatca" ||
      (selectedConnection === "ketnoi" && device.connection === "Kết nối") ||
      (selectedConnection === "matketnoi" &&
        device.connection === "Mất kết nối");

    return matchesSearchTerm && matchesStatus && matchesConnection;
  });
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Danh sách thiết bị
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <p>Trạng thái hoạt động</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionActive}
                        onSelect={handleSelectStatus}
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <p>Trạng thái kết nối</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionConnection}
                        onSelect={handleSelectConnection}
                      />
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <div className="device-search">
                      <p style={{ width: "230px" }}>Từ khoá</p>
                      <SearchInput
                        placeholder="Nhập từ khóa"
                        onSearch={handleSearch}
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "16px" }}>
                  <div className="col">
                    <div className="device-list">
                      <DevicePage devices={filteredDevices} />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonAdd
                      btn_name="Thêm thiết bị"
                      showPage="/device/add"
                    />
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

export default Device;
