import React, { useState } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./ServiceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import NumberRuleForm from "../../components/Number-rule/Number-rule";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { uploadData } from "../../features/serviceSlice";

const ServiceAdd = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [serviceCode, setServiceCode] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const [serviceDescribe, setServiceDescribe] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // State to hold number rule data
  const [numberRule, setNumberRule] = useState<{
    autoIncrement: boolean;
    prefix: string;
    suffix: string;
    resetDaily: boolean;
    rangeStart: string;
    rangeEnd: string;
  }>({
    autoIncrement: false,
    prefix: "",
    suffix: "",
    resetDaily: false,
    rangeStart: "",
    rangeEnd: "",
  });

  const cancelPage = () => {
    navigate("/service");
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all required fields are filled
    // if (
    //   !serviceCode ||
    //   !serviceName ||
    //   !serviceDescribe ||
    //   !status ||
    //   !describe ||
    //   !numberRule.prefix || // Validate number rule data
    //   !numberRule.rangeStart ||
    //   !numberRule.rangeEnd
    // ) {
    //   alert("Please fill in all fields."); // Notify the user to complete all fields
    //   return;
    // }

    const dataToUpload = {
      serviceCode,
      serviceName,
      serviceDescribe,
      status: "Hoạt động",
      numberRule, // Include the number rule object
    };

    console.log("Uploading data:", dataToUpload); // Log the data being uploaded
    dispatch(uploadData(dataToUpload)); // Dispatch the upload action

    // Reset input values after upload
    setServiceCode("");
    setServiceName("");
    setServiceDescribe("");
    setStatus("");
    setNumberRule({
      autoIncrement: false,
      prefix: "",
      suffix: "",
      resetDaily: false,
      rangeStart: "",
      rangeEnd: "",
    });

    // Navigate back to device page
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
                    <form>
                      <div className="form-group">
                        <label className="label" htmlFor="madichvu">
                          Mã dịch vụ:{" "}
                          <span style={{ color: "#FF4747" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="madichvu"
                          placeholder="201"
                          value={serviceCode}
                          onChange={(e) => setServiceCode(e.target.value)} // Handle change
                        />
                      </div>
                      <div className="form-group">
                        <label className="label" htmlFor="tendichvu">
                          Tên dịch vụ:{" "}
                          <span style={{ color: "#FF4747" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tendichvu"
                          placeholder="Khám tim mạch"
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)} // Handle change
                        />
                      </div>
                      <div className="row">
                        <h5
                          className="display-5 pt-3"
                          style={{ color: "#FF7506" }}
                        >
                          Quy tắc cấp số
                        </h5>
                        <div className="col-md-8 device-add-form">
                          <NumberRuleForm
                            onChange={setNumberRule}
                            numberRule={numberRule}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 device-add-form">
                    <div className="form-group">
                      <label className="label" htmlFor="mota">
                        Mô tả:
                      </label>
                      <textarea
                        style={{ height: "120px" }}
                        className="form-control"
                        id="mota"
                        placeholder="Mô tả dịch vụ"
                        value={serviceDescribe}
                        onChange={(e) => setServiceDescribe(e.target.value)} // Handle change
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-form-footer d-flex align-items-center justify-content-center">
              <div className="btn-form-footer-cancel p-2" onClick={cancelPage}>
                <ButtonFormCancel btn_name="Hủy bỏ" />
              </div>
              <div className="btn-form-footer-add p-2" onClick={handleUpload}>
                <ButtonFormAdd btn_name="Thêm dịch vụ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceAdd;
