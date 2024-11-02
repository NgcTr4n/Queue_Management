import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./ServiceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import NumberRuleForm from "../../components/Number-rule/Number-rule";
import { useNavigate, useParams } from "react-router-dom";

type ServiceData = {
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  autoIncreaseN1: string;
  autoIncreaseN2: string;
  prefix: string;
  reset: string;
};

const ServiceUpdate = () => {
  const { serviceCode } = useParams<{ serviceCode: string }>(); // Get service code from URL
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState<ServiceData>({
    serviceCode: "",
    serviceName: "",
    serviceDescribe: "",
    autoIncreaseN1: "",
    autoIncreaseN2: "",
    prefix: "",
    reset: "",
  });

  // Simulate fetching existing data
  useEffect(() => {
    // Replace with actual API call to fetch data by `serviceCode`
    const fetchServiceData = async () => {
      const mockData = {
        serviceCode: serviceCode || "",
        serviceName: "Kiosk",
        serviceDescribe: "This is a description",
        autoIncreaseN1: "001",
        autoIncreaseN2: "100",
        prefix: "PR",
        reset: "Monthly",
      };
      setServiceData(mockData);
    };
    fetchServiceData();
  }, [serviceCode]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const cancelPage = () => {
    navigate("/service");
  };

  const updateService = () => {
    // Replace with actual API call to update service
    console.log("Updated service data:", serviceData);
    navigate("/service");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý dịch vụ
          </h3>
          <div className="device-add-main">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <h5 className="display-5" style={{ color: "#FF7506" }}>
                    Thông tin dịch vụ
                  </h5>
                  <div className="col-md-6 device-add-form">
                    <div className="form-group">
                      <label className="label" htmlFor="serviceCode">
                        Mã dịch vụ: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="serviceCode"
                        name="serviceCode"
                        value={serviceData.serviceCode}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="serviceName">
                        Tên dịch vụ: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="serviceName"
                        name="serviceName"
                        value={serviceData.serviceName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 device-add-form">
                    <div className="form-group">
                      <label className="label" htmlFor="serviceDescribe">
                        Mô tả:
                      </label>
                      <textarea
                        style={{ height: "120px" }}
                        className="form-control"
                        id="serviceDescribe"
                        name="serviceDescribe"
                        value={serviceData.serviceDescribe}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <h5 className="display-5 pt-3" style={{ color: "#FF7506" }}>
                    Quy tắc cấp số
                  </h5>
                  <div className="col-md-6 device-add-form">
                    <NumberRuleForm />
                  </div>
                </div>
                <p>
                  <span style={{ color: "#FF4747" }}>*</span> Là trường thông
                  tin bắt buộc
                </p>
              </div>
            </div>
          </div>
          <div className="btn-form-footer d-flex align-items-center justify-content-center">
            <div className="btn-form-footer-cancel p-2" onClick={cancelPage}>
              <ButtonFormCancel btn_name="Hủy bỏ" />
            </div>
            <div className="btn-form-footer-add p-2" onClick={updateService}>
              <ButtonFormAdd btn_name="Cập nhật" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceUpdate;
