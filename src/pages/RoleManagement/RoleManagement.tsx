import React from "react";
import Layout from "../../layout/Layout";
import SearchInput from "../../components/SearchInput/SearchInput";
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import RolePage from "../../components/Table/TablePage/RolePage";

const RoleManagment = () => {
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
              Danh sách vai trò
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-2"></div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
              </div>
              <div className="col-4"></div>
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
                  <RolePage />
                </div>
              </div>
              <div className="col-1" style={{ marginTop: "15px" }}>
                <ButtonAdd
                  btn_name="Thêm vai trò"
                  showPage="/setting/rolemanagement/add"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleManagment;
