import React, { useState } from "react";
import Layout from "../../layout/Layout";
import "./Service.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";
import ServicePage from "../../components/Table/TablePage/ServicePage";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
const sampleService = [
  {
    serviceCode: "KIO_01",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_02",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_03",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_04",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_05",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_06",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_07",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_08",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_09",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_10",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_11",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_12",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_13",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
  {
    serviceCode: "KIO_14",
    serviceName: "Kiosk",
    serviceDescribe: "Hoạt động",
    status: "Hoạt động",
  },
  {
    serviceCode: "KIO_15",
    serviceName: "Kiosk",
    serviceDescribe: "Ngưng hoạt động",
    status: "Ngưng hoạt động",
  },
];
const optionActive = [
  { label: "Tất cả", value: "tatca" },
  { label: "Hoạt động", value: "hoatdong" },
  { label: "Ngưng hoạt động", value: "ngunghoatdong" },
];

const Service = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("tatca");
  const handleSelect = (value: string) => {
    setSelectedStatus(value);
    console.log("Selected status:", value);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Search input:", value);
  };
  const filteredServices = sampleService.filter((service) => {
    const matchesSearchTerm =
      service.serviceCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "tatca" ||
      (selectedStatus === "hoatdong" && service.status === "Hoạt động") ||
      (selectedStatus === "ngunghoatdong" &&
        service.status === "Ngưng hoạt động");

    return matchesSearchTerm && matchesStatus;
  });
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Quản lý dịch vụ
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
                        options={optionActive}
                        onSelect={handleSelect}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <p>Chọn thời gian</p>
                    <div className="d-flex align-items-center device-dropdown">
                      {/* <DateRangePicker /> */}
                    </div>
                  </div>
                  <div className="col-5 d-flex justify-content-end align-items-center">
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
                      <ServicePage services={filteredServices} />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonAdd
                      btn_name="Thêm dịch vụ"
                      showPage="/service/add"
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

export default Service;
