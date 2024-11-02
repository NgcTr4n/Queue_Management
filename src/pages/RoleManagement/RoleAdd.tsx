import React, { useState } from "react";
import Layout from "../../layout/Layout";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import "./RoleAdd.css";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useNavigate } from "react-router-dom";

type RoleData = {
  roleName: string;
  roleDescribe: string;
  permissions: string[];
};

const RoleUpdate = () => {
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState<RoleData>({
    roleName: "",
    roleDescribe: "",
    permissions: [],
  });

  const cancelPage = () => {
    navigate("/setting/rolemanagement");
  };

  const addNew = () => {
    navigate("/setting/rolemanagement");
    console.log("Add successfully", roleData);
  };

  const handlePermissionChange = (selectedPermissions: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissions: selectedPermissions,
    }));
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h3 className="display-3" style={{ color: "#FF9138" }}>
            Danh sách vai trò
          </h3>
          <div className="row">
            <div className="col-md-12 device-add-main">
              <div className="row">
                <h5 className="display-5" style={{ color: "#FF7506" }}>
                  Thông tin vai trò
                </h5>
                <div className="col-md-6 device-add-form">
                  <form>
                    <div className="form-group">
                      <label className="label" htmlFor="tenvaitro">
                        Tên vai trò: <span style={{ color: "#FF4747" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenvaitro"
                        name="tenvaitro"
                        placeholder="Nhập tên vai trò"
                        onChange={(e) =>
                          setRoleData({ ...roleData, roleName: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="mota">
                        Mô tả:{" "}
                      </label>
                      <textarea
                        className="form-control"
                        id="mota"
                        name="mota"
                        placeholder="Nhập mô tả"
                        style={{ height: "160px" }}
                        onChange={(e) =>
                          setRoleData({
                            ...roleData,
                            roleDescribe: e.target.value,
                          })
                        }
                      />
                    </div>
                  </form>
                  <p>
                    <span style={{ color: "#FF4747" }}>*</span>Là trường thông
                    tin bắt buộc
                  </p>
                </div>
                <div className="col-md-6 device-add-form">
                  <p style={{ color: "#282739", marginBottom: 0 }}>
                    Phân quyền chức năng{" "}
                    <span style={{ color: "#FF4747" }}>*</span>
                  </p>
                  <div
                    className="role-add-form-function"
                    style={{ overflowY: "auto", maxHeight: "420px" }}
                  >
                    <CheckboxGroup
                      title="Nhóm chức năng A"
                      options={["x", "y", "z"]}
                      selectedOptions={roleData.permissions}
                      onChange={handlePermissionChange}
                    />
                    <CheckboxGroup
                      title="Nhóm chức năng B"
                      options={["x", "y", "z"]}
                      selectedOptions={roleData.permissions}
                      onChange={handlePermissionChange}
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
            <div className="btn-form-footer-add p-2" onClick={addNew}>
              <ButtonFormAdd btn_name="Thêm" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleUpdate;
