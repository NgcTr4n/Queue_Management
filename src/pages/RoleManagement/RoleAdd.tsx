import React, { useState } from "react";
import Layout from "../../layout/Layout";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import "./RoleAdd.css";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { uploadData } from "../../features/roleSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type RoleData = {
  roleName: string;
  roleDescribe: string;
  userCount: number;
  permissionsA: { permissionName: string }[];
  permissionsB: { permissionName: string }[];
  permissionsC: { permissionName: string }[];
  permissionsD: { permissionName: string }[];
  permissionsE: { permissionName: string }[];
  permissionsF: { permissionName: string }[];
  permissionsG: { permissionName: string }[];
};

const RoleAdd = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const existingRoles = useSelector((state: RootState) => state.role.role); // Access all roles
  const [roleData, setRoleData] = useState<RoleData>({
    roleName: "",
    roleDescribe: "",
    userCount: existingRoles.length,
    permissionsA: [{ permissionName: "" }],
    permissionsB: [{ permissionName: "" }],
    permissionsC: [{ permissionName: "" }],
    permissionsD: [{ permissionName: "" }],
    permissionsE: [{ permissionName: "" }],
    permissionsF: [{ permissionName: "" }],
    permissionsG: [{ permissionName: "" }],
  });

  const cancelPage = () => {
    navigate("/setting/rolemanagement");
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedRoleData = {
      ...roleData,
      userCount: existingRoles.length + 1, // Increment by 1
    };
    console.log("Uploading data:", updatedRoleData);
    dispatch(uploadData(updatedRoleData)); // Dispatch the upload action

    // Reset form data after upload
    setRoleData({
      roleName: "",
      roleDescribe: "",
      userCount: existingRoles.length + 1,
      permissionsA: [{ permissionName: "" }],
      permissionsB: [{ permissionName: "" }],
      permissionsC: [{ permissionName: "" }],
      permissionsD: [{ permissionName: "" }],
      permissionsE: [{ permissionName: "" }],
      permissionsF: [{ permissionName: "" }],
      permissionsG: [{ permissionName: "" }],
    });

    // Navigate back to role management page
    navigate("/setting/rolemanagement");
  };

  const handlePermissionAChange = (selectedPermissionsA: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsA: selectedPermissionsA.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };

  const handlePermissionBChange = (selectedPermissionsB: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsB: selectedPermissionsB.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };
  const handlePermissionCChange = (selectedPermissionsC: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsC: selectedPermissionsC.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };
  const handlePermissionDChange = (selectedPermissionsD: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsD: selectedPermissionsD.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };
  const handlePermissionEChange = (selectedPermissionsE: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsE: selectedPermissionsE.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };
  const handlePermissionFChange = (selectedPermissionsF: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsF: selectedPermissionsF.map((permission) => ({
        permissionName: permission,
      })),
    }));
  };
  const handlePermissionGChange = (selectedPermissionsG: string[]) => {
    setRoleData((prevData) => ({
      ...prevData,
      permissionsG: selectedPermissionsG.map((permission) => ({
        permissionName: permission,
      })),
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
                  <form onSubmit={handleUpload}>
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
                        value={roleData.roleName}
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
                        value={roleData.roleDescribe}
                        onChange={(e) =>
                          setRoleData({
                            ...roleData,
                            roleDescribe: e.target.value,
                          })
                        }
                      />
                    </div>
                    <p>
                      <span style={{ color: "#FF4747" }}>*</span>Là trường thông
                      tin bắt buộc
                    </p>
                  </form>
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
                      title="Quản lý Hồ sơ Bệnh nhân"
                      options={[
                        "Xem hồ sơ bệnh nhân",
                        "Chỉnh sửa hồ sơ bệnh nhân",
                        "Thêm hồ sơ mới",
                      ]}
                      selectedOptions={roleData.permissionsA.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionAChange}
                    />
                    <CheckboxGroup
                      title="Chẩn đoán và Điều trị"
                      options={[
                        "Kê đơn thuốc",
                        "Ghi chép chẩn đoán",
                        "Theo dõi tiến trình điều trị",
                      ]}
                      selectedOptions={roleData.permissionsB.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionBChange}
                    />
                    <CheckboxGroup
                      title="Quản lý Tài chính"
                      options={[
                        "Theo dõi thu chi",
                        "Quản lý hóa đơn",
                        "Lập báo cáo tài chính",
                      ]}
                      selectedOptions={roleData.permissionsC.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionCChange}
                    />
                    <CheckboxGroup
                      title="Quản lý Nhân sự"
                      options={[
                        "Thêm nhân viên mới",
                        "Xóa nhân viên",
                        "Cập nhật thông tin nhân viên",
                      ]}
                      selectedOptions={roleData.permissionsD.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionDChange}
                    />
                    <CheckboxGroup
                      title="Lịch làm việc"
                      options={[
                        "Quản lý lịch khám",
                        "Đặt lịch hẹn cho bệnh nhân",
                        "Thông báo lịch hẹn",
                      ]}
                      selectedOptions={roleData.permissionsE.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionEChange}
                    />
                    <CheckboxGroup
                      title="Báo cáo và Phân tích"
                      options={[
                        "Tạo báo cáo hiệu suất",
                        "Phân tích dữ liệu tài chính",
                        "Đánh giá hiệu suất nhân viên",
                      ]}
                      selectedOptions={roleData.permissionsF.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionFChange}
                    />
                    <CheckboxGroup
                      title="Hỗ trợ Kỹ thuật"
                      options={[
                        "Giải quyết sự cố kỹ thuật",
                        "Cập nhật hệ thống",
                        "Đào tạo người dùng mới",
                      ]}
                      selectedOptions={roleData.permissionsG.map(
                        (item) => item.permissionName
                      )} // Pass as string[]
                      onChange={handlePermissionGChange}
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
              <ButtonFormAdd btn_name="Thêm" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleAdd;
