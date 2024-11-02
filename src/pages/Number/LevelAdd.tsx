import React from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import { useNavigate } from "react-router-dom";
const optionsLevel = [
  { label: "Khám tim mạch", value: "timmach" },
  { label: "Khám sản - Phụ khoa", value: "sanphukhoa" },
  { label: "Khám răng hàm mặt", value: "ranghammat" },
  { label: "Khám tai mũi họng", value: "taimuihong" },
];
const LevelAdd = () => {
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  const cancelPage = () => {
    navigate("/number");
  };
  const addLevel = () => {
    navigate("/number");
    console.log("Add successfully");
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Quản lý cấp số
          </h3>{" "}
          <div className="row">
            <div className="col-md-12  device-add-main">
              <div className="row">
                <h5
                  className="display-5"
                  style={{ textAlign: "center", color: "#FF7506" }}
                >
                  CẤP SỐ MỚI
                </h5>
                <div className="col-md-4 device-add-form"></div>
                <div className="col-md-4 device-add-form">
                  <form action="">
                    <div className="form-group">
                      <label
                        className="label d-flex align-items-center justify-content-center"
                        htmlFor="loaithietbi"
                      >
                        Dịch vụ khách hàng lựa chọn
                      </label>
                      <br />
                      <CustomDropdown
                        options={optionsLevel}
                        onSelect={handleSelect}
                        style={{ width: "100%", height: "38px" }}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-4 device-add-form"></div>
              </div>
              <div className="btn-form-footer d-flex align-items-center justify-content-center">
                <div
                  className="btn-form-footer-cancel p-2"
                  onClick={cancelPage}
                >
                  <ButtonFormCancel btn_name="Hủy bỏ" />
                </div>
                <div className="btn-form-footer-add p-2" onClick={addLevel}>
                  <ButtonFormAdd btn_name="In số" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LevelAdd;
