import React from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import "./DeviceAdd.css";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
const optionsDevice = [
  { label: "Kiosk", value: "kiosk" },
  { label: "Display counter", value: "displaycounter" },
];
const DeviceAdd = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý thiết bị
          </h3>{" "}
          <div className="row">
            <div className="col-md-12  device-add-main">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin thiết bị
                </h5>
                <div className="col-md-6 device-add-form">
                  <form action="">
                    <div className="form-group">
                      <label className="label" htmlFor="mathietbi">
                        Mã thiết bị: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mathietbi"
                        name="mathietbi"
                        placeholder="Nhập mã thiết bị"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="tenthietbi">
                        Tên thiết bị:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenthietbi"
                        name="tenthietbi"
                        placeholder="Nhập tên thiết bị"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="diachiip">
                        Địa chỉ IP: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="diachiip"
                        name="diachiip"
                        placeholder="Nhập địa chỉ IP"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6 device-add-form">
                  <form action="">
                    <div className="form-group">
                      <label className="label" htmlFor="loaithietbi">
                        Loại thiết bị:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <br />
                      <CustomDropdown
                        options={optionsDevice}
                        onSelect={handleSelect}
                        style={{ width: "100%", height: "38px" }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="tendangnhap">
                        Tên đăng nhập:{" "}
                        <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tendangnhap"
                        name="tendangnhap"
                        placeholder="Nhập tài khoản"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="matkhau">
                        Mật khẩu: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="matkhau"
                        name="matkhau"
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                  </form>
                </div>
                <div className="form-group device-add-form">
                  <label className="label" htmlFor="dichvusudung">
                    Dịch vụ sử dụng: <span style={{ color: "#FF4747" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dichvusudung"
                    name="dichvusudung"
                    placeholder="Nhập dịch vụ sử dúng"
                  />
                </div>
              </div>
              <p>
                <span style={{ color: "#FF4747" }}>*</span>Là trường thông tin
                bắt buộc
              </p>
            </div>
          </div>
          <div className="btn-form-footer d-flex align-items-center justify-content-center">
            <div className="btn-form-footer-cancel p-2">
              <ButtonFormCancel btn_name="Hủy bỏ" />
            </div>
            <div className="btn-form-footer-add p-2">
              <ButtonFormAdd btn_name="Thêm thiết bị" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceAdd;
