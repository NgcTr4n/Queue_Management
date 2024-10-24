import React from "react";
import Layout from "../../layout/Layout";
// import "./Device.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";

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
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Quản lý cấp số{" "}
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
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <p>Tình trạng</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionStatus}
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <p>Nguồn cấp</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionPowerSupply}
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <p>Chọn thời gian</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <DateRangePicker />
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
                      <NumberPage />
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
