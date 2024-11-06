import React from "react";
import Layout from "../../layout/Layout";
// import "./Device.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import ReportPage from "../../components/Table/TablePage/ReportPage";
import ButtonDownload from "../../components/Button/ButtonAdd/ButtonDownload";

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

const Report = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col">
                    <p>Chọn thời gian</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <DateRangePicker />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "16px" }}>
                  <div className="col">
                    <div className="device-list">
                      <ReportPage />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonDownload btn_name="Tải về" />
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

export default Report;
