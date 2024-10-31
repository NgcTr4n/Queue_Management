import React from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import AccountPage from "../../components/Table/TablePage/AccountPage";

const optionRole = [
  { label: "Tất cả", value: "tatca" },
  { label: "Hoạt động", value: "hoatdong" },
  { label: "Ngưng hoạt động", value: "ngunghoatdong" },
];

const AccountManagement = () => {
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
              Dánh sách tài khoản
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <p>Tên vai trò</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionRole}
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-3 d-flex justify-content-end align-items-center">
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
                      <AccountPage />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonAdd
                      btn_name="Thêm tài khoản"
                      showPage="/setting/accountmanagement/add"
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

export default AccountManagement;
