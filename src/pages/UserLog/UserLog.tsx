import React from "react";
import Layout from "../../layout/Layout";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import UserLogPage from "../../components/Table/TablePage/UserLogPage";

const UserLog = () => {
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
                  <div className="col-4">
                    <p>Chọn thời gian</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <DateRangePicker />
                    </div>
                  </div>
                  <div className="col-6"></div>

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
                      <UserLogPage />
                    </div>
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

export default UserLog;
