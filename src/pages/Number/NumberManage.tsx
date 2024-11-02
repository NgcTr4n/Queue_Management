import React, { useState } from "react";
import Layout from "../../layout/Layout";
// import "./Device.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";

const sampleLevel = [
  {
    serialNumber: "2010001",
    customerName: "Lê Huỳnh Ái Vân",
    serviceName: "Khám tim mạch",
    issueTime: "14:35 - 07/11/2021",
    expirationTime: "14:35 - 12/11/2021",
    statusLevel: "Đang chờ",
    source: "Kiosk",
  },
  {
    serialNumber: "2010002",
    customerName: "Huỳnh Ái Vân",
    serviceName: "Khám sản - Phụ khoa",
    issueTime: "14:35 - 07/11/2021",
    expirationTime: "14:35 - 12/11/2021",
    statusLevel: "Đã sử dụng",
    source: "Kiosk",
  },
  {
    serialNumber: "2010003",
    customerName: "Lê Ái Vân",
    serviceName: "Khám răng hàm mặt",
    issueTime: "14:35 - 07/11/2021",
    expirationTime: "14:35 - 12/11/2021",
    statusLevel: "Đang chờ",
    source: "Hệ thống",
  },
];

const optionServicee = [
  { label: "Tất cả", value: "tatca" },
  { label: "Khám sản - Phụ khoa", value: "khamsanphukhoa" },
  { label: "Khám răng hàm mặt", value: "ranghammat" },
  { label: "Khám tai mũi họng", value: "taimuihong" },
];

const optionStatus = [
  { label: "Tất cả", value: "tatca" },
  { label: "Đang chờ", value: "dangcho" },
  { label: "Đã sử dụng", value: "dasudung" },
  { label: "Bỏ qua", value: "boqua" },
];

const optionPowerSupply = [
  { label: "Tất cả", value: "tatca" },
  { label: "Kiosk", value: "kiosk" },
  { label: "Hệ thống", value: "hethong" },
];

const NumberManage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("tatca");
  const [selectedService, setSelectedService] = useState("tatca");
  const [selectedPowerSupply, setSelectedPowerSupply] = useState("tatca");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]); // Explicit type for date range
  const handleSelectStatus = (value: string) => {
    setSelectedStatus(value);
    console.log("Selected status:", value);
  };

  const handleSelectService = (value: string) => {
    setSelectedService(value);
    console.log("Selected Service:", value);
  };

  const handlePowerSupply = (value: string) => {
    setSelectedPowerSupply(value);
    console.log("Selected PowerSupply:", value);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Search input:", value);
  };

  const handleDateRangeChange = (range: [Date | null, Date | null]) => {
    setDateRange(range);
    console.log("Selected Date Range:", range);
  };

  const filteredLevel = sampleLevel.filter((level) => {
    const matchesSearchTerm =
      level.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      level.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      level.serviceName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "tatca" ||
      (selectedStatus === "dangcho" && level.statusLevel === "Đang chờ") ||
      (selectedStatus === "dasudung" && level.statusLevel === "Đã sử dụng") ||
      (selectedStatus === "boqua" && level.statusLevel === "Bỏ qua");

    const matchesService =
      selectedService === "tatca" ||
      (selectedService === "khamsanphukhoa" &&
        level.serviceName === "Khám sản - Phụ khoa") ||
      (selectedService === "ranghammat" &&
        level.serviceName === "Khám răng hàm mặt") ||
      (selectedService === "taimuihong" &&
        level.serviceName === "Khám tai mũi họng");

    const matchesPowerSupply =
      selectedPowerSupply === "tatca" ||
      (selectedPowerSupply === "kiosk" && level.source === "Kiosk") ||
      (selectedPowerSupply === "hethong" && level.source === "Hệ thống");
    const issueTime = new Date(level.issueTime.split(" - ")[1]); // Parse the issueTime to a Date object
    const isWithinDateRange =
      (!dateRange[0] && !dateRange[1]) || // No date range selected
      (dateRange[0] && !dateRange[1] && issueTime >= dateRange[0]) || // Only start date selected
      (dateRange[1] && !dateRange[0] && issueTime <= dateRange[1]) || // Only end date selected
      (dateRange[0] &&
        dateRange[1] &&
        issueTime >= dateRange[0] &&
        issueTime <= dateRange[1]);
    return (
      matchesSearchTerm &&
      matchesStatus &&
      matchesService &&
      matchesPowerSupply &&
      isWithinDateRange
    );
  });

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Quản lý cấp số
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-2">
                    <p>Tên dịch vụ</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionServicee}
                        onSelect={handleSelectService}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <p>Tình trạng</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionStatus}
                        onSelect={handleSelectStatus}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <p>Nguồn cấp</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionPowerSupply}
                        onSelect={handlePowerSupply}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <p>Chọn thời gian</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <DateRangePicker onChange={handleDateRangeChange} />
                    </div>
                  </div>
                  <div className="col-2 d-flex justify-content-end align-items-center">
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
                      <NumberPage level={filteredLevel} />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonAdd btn_name="Cấp số mới" showPage="/number/add" />
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

export default NumberManage;
