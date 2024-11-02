import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import "./RoleAdd.css";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useNavigate, useParams } from "react-router-dom";

type RoleData = {
  roleName: string;
  roleDesscribe: string;
  permissionsA: string[];
  permissionsB: string[];
};

const RoleUpdate = () => {
  const { roleName, roleDesscribe } = useParams<{
    roleName: string;
    roleDesscribe: string;
  }>();

  const navigate = useNavigate();
  const [roleData, setRoleData] = useState<RoleData>({
    roleName: "",
    roleDesscribe: "",
    permissionsA: [],
    permissionsB: [],
  });

  useEffect(() => {
    // Mock API call to fetch role data by roleName (you need to replace this with actual API call)
    const fetchRoleData = async () => {
      const mockData = {
        roleName: roleName || "DEV001",
        roleDesscribe: roleDesscribe || "Sample description", // Sample data
        permissionsA: ["x"], // Sample permissions
        permissionsB: ["a", "b"], // Sample permissions
      };
      setRoleData(mockData);
    };
    fetchRoleData();
  }, []); // Use empty array if this is only run on component mount

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePermissionsAChange = (selectedPermissions: string[]) => {
    setRoleData((prev) => ({
      ...prev,
      permissionsA: selectedPermissions,
    }));
  };

  const handlePermissionsBChange = (selectedPermissions: string[]) => {
    setRoleData((prev) => ({
      ...prev,
      permissionsB: selectedPermissions,
    }));
  };

  const cancelPage = () => {
    navigate("/setting/rolemanagement");
  };

  const addNew = () => {
    // Handle add/update role
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
