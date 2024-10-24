import React from "react";
import Layout from "../../layout/Layout";
import "./Device.css";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DevicePage from "../../components/Table/TablePage/DevicePage";

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
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <p>Trạng thái kết nối</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionConnection}
                        onSelect={handleSelect}
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
                      <DevicePage />
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
