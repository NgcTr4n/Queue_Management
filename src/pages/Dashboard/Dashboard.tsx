import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import Card_level from "../../components/Card/Dashboard-card/Card_level";
import "./Dashboard.css";
import Chart from "../../components/Chart/Chart";
import { Dropdown } from "react-bootstrap";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import CustomCalendar from "../../components/Calendar/Calendar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../hooks/hooks";
import { fetchDevice } from "../../features/deviceSlice";
import { fetchService } from "../../features/serviceSlice";
const options = [
  { label: "Ngày", value: "ngay" },
  { label: "Tháng", value: "thang" }, // This one will have special styling
  { label: "Năm", value: "nam" },
];
const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { device } = useAppSelector((state) => state.device);
  const { service } = useAppSelector((state) => state.service);

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  useEffect(() => {
    dispatch(fetchDevice());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);
  // Function to calculate percentage dynamically
  const calculatePercentage = (count: number, activeCount: number) => {
    const percentage = (activeCount / count) * 100;
    return Math.round(percentage);
  };
  const activeDevices = device.filter(
    (dev) => dev.status === "Hoạt động"
  ).length;
  const inactiveDevices = device.filter(
    (dev) => dev.status === "Ngưng hoạt động"
  ).length;
  const activeServices = service.filter(
    (dev) => dev.status === "Hoạt động"
  ).length;
  const inactiveServices = service.filter(
    (dev) => dev.status === "Ngưng hoạt động"
  ).length;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-8">
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
                      <CustomDropdown
                        options={options}
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-striped">
                  <Chart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ background: "#fff" }}>
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Tổng quan
            </h3>{" "}
            <OverviewCard
              percentage={calculatePercentage(device.length, activeDevices)}
              count={device.length}
              title="Thiết bị"
              activeLabel="Đang hoạt động"
              activeCount={activeDevices}
              inactiveLabel="Ngừng hoạt động"
              inactiveCount={inactiveDevices}
              color="#FF7F2A"
            />
            <OverviewCard
              percentage={calculatePercentage(service.length, activeServices)}
              count={service.length}
              title="Dịch vụ"
              activeLabel="Đang hoạt động"
              activeCount={activeServices}
              inactiveLabel="Ngừng hoạt động"
              inactiveCount={inactiveServices}
              color="#4370F2"
            />
            <OverviewCard
              percentage={calculatePercentage(5, 4)}
              count={5}
              title="Cấp số"
              activeLabel="Đang chờ"
              activeCount={4}
              inactiveLabel="Đã sử dụng"
              inactiveCount={1}
              color="#35C75A"
            />
            <div className="mt-4">
              <CustomCalendar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
