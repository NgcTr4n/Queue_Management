import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import ServicePage from "../../components/Table/TablePage/ServicePage";
import ServiceDetailPage from "../../components/Table/TablePage/ServiceDetailPage";
import ServiceDetailButton from "../../components/Button/ButtonAdd/ServiceDetailButton";
type DeviceDetailProps = {
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  status: string;
  describe: string;
  autoIncreaseN1: string;
  autoIncreaseN2: string;
  prefix: string;
  reset: string;
};
const optionActive = [
  { label: "Tất cả", value: "tatca" },
  { label: "Đã hoàn thành", value: "dahoanthanh" },
  { label: "Đang thực hiện", value: "dangthuchien" },
  { label: "Vắng", value: "vang" },
];

const ServiceDetail: React.FC = () => {
  const { serviceCode } = useParams<{ serviceCode: string }>();
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };

  const allData: DeviceDetailProps[] = [
    {
      serviceCode: "KIO_01",
      serviceName: "Khám tim mạch",
      serviceDescribe: "Hoạt động",
      status: "Hoạt động",
      describe: "Chuyên các bệnh lý về tim",
      autoIncreaseN1: "0001",
      autoIncreaseN2: "9999",
      prefix: "0001",
      reset: "reset",
    },
    {
      serviceCode: "KIO_02",
      serviceName: "Khám tim mạch",
      serviceDescribe: "Hoạt động",
      status: "Hoạt động",
      describe: "Chuyên các bệnh lý về tim",
      autoIncreaseN1: "0001",
      autoIncreaseN2: "9999",
      prefix: "0001",
      reset: "reset",
    },
  ];

  const device = allData.find((item) => item.serviceCode === serviceCode);

  if (!device) {
    return <div>Device not found</div>;
  }

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
                          {device.serviceCode}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Tên dịch vụ:</strong>
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.serviceName}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Mô tả:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.describe}
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
                          {device.autoIncreaseN1} đến {device.autoIncreaseN2}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div className="row">
                        <div className="col">
                          <strong>Prefix:</strong>{" "}
                        </div>
                        <div className="col" style={{ color: "#535261" }}>
                          {device.prefix}
                        </div>
                      </div>
                    </p>
                    <p>
                      <div>
                        <div>
                          <strong>Reset mỗi ngày</strong> <br />
                          <span style={{ color: "#535261" }}>
                            {" "}
                            Ví dụ: 201-2001
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
                            <ServiceDetailPage />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="col-1" style={{ marginTop: "15px" }}>
                      <ServiceDetailButton />
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
