import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./ServiceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import NumberRuleForm from "../../components/Number-rule/Number-rule";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchService, updateData } from "../../features/serviceSlice";

type NumberRule = {
  autoIncrement: boolean;
  prefix: string;
  suffix: string;
  resetDaily: boolean;
  rangeStart: string;
  rangeEnd: string;
};

type ServiceData = {
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  status: string;
  numberRule: NumberRule;
};

const ServiceUpdate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { service, loading, error } = useAppSelector((state) => state.service);
  const [serviceData, setServiceData] = useState<ServiceData>({
    serviceCode: "",
    serviceName: "",
    serviceDescribe: "",
    status: "",
    numberRule: {
      autoIncrement: false,
      prefix: "",
      suffix: "",
      resetDaily: false,
      rangeStart: "0001",
      rangeEnd: "9999",
    },
  });

  // Fetch data on mount if not available
  useEffect(() => {
    if (!service || service.length === 0) {
      dispatch(fetchService()); // Fetch all services data if not loaded
    }
  }, [dispatch, service]);

  // Set initial data when `id` and `service` are available
  useEffect(() => {
    if (id && Array.isArray(service) && service.length > 0) {
      const foundService = service.find((s) => s.id === id);
      if (foundService) {
        setServiceData(foundService);
      }
    }
  }, [service, id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNumberRuleChange = (updatedNumberRule: NumberRule) => {
    setServiceData((prevData) => ({
      ...prevData,
      numberRule: updatedNumberRule,
    }));
  };

  const cancelPage = () => {
    navigate("/service");
  };

  const updateServiceData = async () => {
    if (id) {
      if (!serviceData.serviceName || !serviceData.serviceDescribe) {
        alert("Please fill in all required fields.");
        return;
      }

      try {
        await dispatch(
          updateData({
            ...serviceData,
            id,
            status: "Hoạt động",
          })
        ).unwrap();
        navigate("/service");
      } catch (err) {
        console.error("Failed to update service:", err);
        alert("Failed to update service. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                    <NumberRuleForm
                      onChange={handleNumberRuleChange}
                      numberRule={serviceData.numberRule}
                    />
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
            <div
              className="btn-form-footer-add p-2"
              onClick={updateServiceData}
            >
              <ButtonFormAdd btn_name="Cập nhật" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceUpdate;
function fetchServices(): any {
  throw new Error("Function not implemented.");
}
