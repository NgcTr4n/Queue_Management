import React from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./ServiceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import NumberRuleForm from "../../components/Number-rule/Number-rule";
import { useNavigate } from "react-router-dom";
const optionsDevice = [
  { label: "Kiosk", value: "kiosk" },
  { label: "Display counter", value: "displaycounter" },
];
const ServiceAdd = () => {
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  const cancelPage = () => {
    navigate("/service");
  };
  const addService = () => {
    navigate("/service");
    console.log("Add sucessfully");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý dịch vụ
          </h3>{" "}
          <div className="device-add-main">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <h5 className="display-5" style={{ color: "#FF7506" }}>
                    Thông tin dịch vụ
                  </h5>
                  <div className="col-md-6 device-add-form">
                    <form action="">
                      <div className="form-group">
                        <label className="label" htmlFor="madichvu">
                          Mã dịch vụ:{" "}
                          <span style={{ color: "#FF4747" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="madichvu"
                          name="madichvu"
                          placeholder="201"
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
                          name="tendichvu"
                          placeholder="Khám tim mạch"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 device-add-form">
                    <form action="">
                      <div className="form-group">
                        <label className="label" htmlFor="mota">
                          Mô tả:
                        </label>
                        <textarea
                          style={{ height: "120px" }}
                          className="form-control"
                          id="mota"
                          name="mota"
                          placeholder="Mô tả dịch vụ"
                        />
                      </div>
                    </form>
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
                  <span style={{ color: "#FF4747" }}>*</span>Là trường thông tin
                  bắt buộc
                </p>
              </div>
            </div>
          </div>
          <div className="btn-form-footer d-flex align-items-center justify-content-center">
            <div className="btn-form-footer-cancel p-2" onClick={cancelPage}>
              <ButtonFormCancel btn_name="Hủy bỏ" />
            </div>
            <div className="btn-form-footer-add p-2" onClick={addService}>
              <ButtonFormAdd btn_name="Thêm dịch vụ" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceAdd;
