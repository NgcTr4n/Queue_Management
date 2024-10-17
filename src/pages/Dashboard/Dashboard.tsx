import React from "react";
import Layout from "../../layout/Layout";
import Card_level from "../../components/Card/Dashboard-card/Card_level";
import "./Dashboard.css";
import Chart from "../../components/Chart/Chart";
import { Dropdown } from "react-bootstrap";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
const options = [
    { label: 'Ngày', value: 'ngay' },
    { label: 'Tháng', value: 'thang' }, // This one will have special styling
    { label: 'Năm', value: 'nam' }
  ];
const Dashboard = () => {
    const handleSelect = (value: string) => {
        console.log('Selected value:', value);
      };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Biểu đồ cấp số
            </h3>
            <Card_level />
            <div className="dashboard-statistical row">
              <div className="col">
                <div className="dashboard-statistical-heading row">
                  <div className="dashboard-statistical-content col">
                    <h5 className="display-5 dashboard-title">
                      Bảng thống kê theo tuần
                    </h5>
                    <p className="dashboard-date">Tháng 11/2021</p>
                  </div>
                  <div className="dashboard-statistical-sort col d-flex align-items-center justify-content-end">
                    <p className="sort-text d-flex align-items-center">
                      Xem thêm
                    </p>
                    <div className="d-flex align-items-center">
                    <CustomDropdown options={options} onSelect={handleSelect} />
                    </div>
                  </div>
                </div>
                <div className="table-striped">
                  <Chart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" style={{ background: "#fff" }}>
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Tổng quan
            </h3>{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
