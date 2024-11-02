import React, { useState } from "react";
import Layout from "../../layout/Layout";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import "./RoleAdd.css";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useNavigate } from "react-router-dom";

type RoleData = {
  roleName: string;
  roleDesscribe: string;
  permissionsA: string[];
  permissionsB: string[];
};

const RoleUpdate = () => {
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState<RoleData>({
    roleName: "",
    roleDesscribe: "",
    permissionsA: [],
    permissionsB: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoleData({
      ...roleData,
      [name]: value,
    });
  };

  // Handle checkbox group changes for A
  const handlePermissionsAChange = (selectedPermissions: string[]) => {
    setRoleData({
      ...roleData,
      permissionsA: selectedPermissions,
    });
  };

  // Handle checkbox group changes for B
  const handlePermissionsBChange = (selectedPermissions: string[]) => {
    setRoleData({
      ...roleData,
      permissionsB: selectedPermissions,
    });
  };

  // Handle cancel
  const cancelPage = () => {
    navigate("/setting/rolemanagement");
  };

  // Handle add/update role
  const addNew = () => {
    // Here, you would typically send `roleData` to an API or backend
    console.log("Role data:", roleData);
    navigate("/setting/rolemanagement");
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
                        name="roleName"
                        placeholder="Nhập tên vai trò"
                        value={roleData.roleName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label" htmlFor="mota">
                        Mô tả:
                      </label>
                      <textarea
                        className="form-control"
                        id="mota"
                        name="roleDesscribe"
                        placeholder="Nhập mô tả"
                        style={{ height: "160px" }}
                        value={roleData.roleDesscribe}
                        onChange={handleInputChange}
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
                      selectedOptions={roleData.permissionsA}
                      onChange={handlePermissionsAChange}
                    />
                    <CheckboxGroup
                      title="Nhóm chức năng B"
                      options={["a", "b", "c"]}
                      selectedOptions={roleData.permissionsB}
                      onChange={handlePermissionsBChange}
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
