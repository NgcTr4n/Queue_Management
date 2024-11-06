import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import ServicePage from "../../components/Table/TablePage/ServicePage";
import ServiceDetailPage from "../../components/Table/TablePage/ServiceDetailPage";
import ServiceDetailButton from "../../components/Button/ButtonAdd/ServiceDetailButton";
import { useAppSelector } from "../../hooks/hooks";
import { fetchService } from "../../features/serviceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const optionActive = [
  { label: "Tất cả", value: "tatca" },
  { label: "Đã hoàn thành", value: "dahoanthanh" },
  { label: "Đang thực hiện", value: "dangthuchien" },
  { label: "Vắng", value: "vang" },
];

const ServiceDetail: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { service, loading, error } = useAppSelector((state) => state.service);
  const { id } = useParams<{ id: string }>();

  const [currentCount, setCurrentCount] = useState<number | null>(null);
  const [status, setStatus] = useState<string>(optionActive[0].value);
  const [serialNumbers, setSerialNumbers] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  useEffect(() => {
    if (service && Array.isArray(service)) {
      const allService = service.find((item) => item.id === id);
      if (allService) {
        // Check if rangeStart exists and set currentCount
        if (allService.numberRule?.rangeStart) {
          setCurrentCount(parseInt(allService.numberRule.rangeStart, 10));
        }
        // Generate serial numbers based on prefix and range
        generateSerialNumbers(allService);
      }
    }
  }, [service, id]);

  const generateSerialNumbers = (allService: any) => {
    const serviceCode = allService.serviceCode;
    const prefix = allService.numberRule?.prefix;
    const rangeStart = parseInt(allService.numberRule?.rangeStart, 10) || 0;
    const rangeEnd = parseInt(allService.numberRule?.rangeEnd, 10) || 0;

    const numbers: string[] = [];

    if (prefix) {
      numbers.push(`${serviceCode}${prefix}`);
    }

    // Generate serial numbers based on the automatic range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const formattedCount = String(i).padStart(4, "0"); // Format the number to be 4 digits
      numbers.push(`${serviceCode}${formattedCount}`); // Combine serviceCode with formatted number
    }

    setSerialNumbers(numbers);
  };

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const allService = Array.isArray(service)
    ? service.find((item) => item.id === id)
    : null;

  if (!allService) return <div>Service not found</div>;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý thiết bị
          </h3>{" "}
          <div className="row">
            <div className="col-md-12">
              <div className="row-4">
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-md-4 device-detail-main">
                    <h5 className="display-5" style={{ color: "#FF7506" }}>
                      Thông tin thiết bị
                    </h5>
                    <p className="device-detail">
                      <div className="row">
                        <div className="col">
                          <strong>Mã dịch vụ:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allService?.serviceCode}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên dịch vụ:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allService?.serviceName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Mô tả:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allService?.serviceDescribe}
                        </div>
                      </div>
                    </p>
                    <h5 className="display-5" style={{ color: "#FF7506" }}>
                      Quy tắc cấp số
                    </h5>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tăng tự động:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allService.numberRule?.rangeStart} đến{" "}
                          {allService.numberRule?.rangeEnd}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Prefix:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {allService.numberRule?.prefix}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div>
                        <div>
                          <strong>Reset mỗi ngày</strong> <br />
                          <span style={{ color: "#535261" }}>
                            {" "}
                            Ví dụ: 201 - 2001
                          </span>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="col-md-7 device-detail">
                    <div className="col device-detail-main">
                      <div className="row">
                        <div className="col-3">
                          <p>Trạng thái</p>
                          <div className="d-flex align-items-center device-dropdown">
                            <CustomDropdown
                              options={optionActive}
                              onSelect={handleSelect}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <p>Chọn thời gian</p>
                          <div className="d-flex align-items-center device-dropdown">
                            {/* <DateRangePicker /> */}
                          </div>
                        </div>
                        <div className="col-3  d-flex justify-content-end align-items-center">
                          <div className="device-search">
                            <p style={{ width: "206px" }}>Từ khoá</p>
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
                            <ServiceDetailPage
                              serialNumbers={serialNumbers} // Pass the list of serial numbers
                              serviceStatus={status}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="col-1" style={{ marginTop: "15px" }}>
                      <ServiceDetailButton id={allService?.id} />
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

export default ServiceDetail;
