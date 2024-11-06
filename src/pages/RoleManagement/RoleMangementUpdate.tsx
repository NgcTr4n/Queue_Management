import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import ButtonFormAdd from "../../components/Button/ButtonForm/ButtonFormAdd/ButtonFormAdd";
import ButtonFormCancel from "../../components/Button/ButtonForm/ButtonFormCancel/ButtonFormCancel";
import "./RoleAdd.css";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRole, updateData } from "../../features/roleSlice";

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

const RoleUpdate = () => {
  const { id } = useParams<{ id: string }>(); // Ensure you extract ID correctly
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { role, loading, error } = useAppSelector((state) => state.role);
  const [roleData, setRoleData] = useState<RoleData>({
    roleName: "",
    roleDescribe: "",
    userCount: 0,
    permissionsA: [{ permissionName: "" }],
    permissionsB: [{ permissionName: "" }],
    permissionsC: [{ permissionName: "" }],
    permissionsD: [{ permissionName: "" }],
    permissionsE: [{ permissionName: "" }],
    permissionsF: [{ permissionName: "" }],
    permissionsG: [{ permissionName: "" }],
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (id && !loaded) {
      dispatch(fetchRole()).then(() => {
        const existingRole = role.find((r) => r.id === id);
        if (existingRole) {
          setRoleData({
            roleName: existingRole.roleName,
            roleDescribe: existingRole.roleDescribe,
            userCount: existingRole.userCount,
            permissionsA: existingRole.permissionsA,
            permissionsB: existingRole.permissionsB,
            permissionsC: existingRole.permissionsC,
            permissionsD: existingRole.permissionsD,
            permissionsE: existingRole.permissionsE,
            permissionsF: existingRole.permissionsF,
            permissionsG: existingRole.permissionsG,
          });
          setLoaded(true);
        }
      });
    }
  }, [dispatch, id, loaded, role]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoleData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  const cancelPage = () => {
    navigate("/setting/rolemanagement");
  };
  const updateRoleData = async () => {
    if (id) {
      if (!roleData.roleName || !roleData.roleDescribe) {
        alert("Please fill in all required fields.");
        return;
      }

      try {
        await dispatch(
          updateData({
            ...roleData,
            id,
          })
        ).unwrap();
        navigate("/setting/rolemanagement");
      } catch (err) {
        console.error("Failed to update service:", err);
        alert("Failed to update service. Please try again later.");
      }
    }
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
                        name="roleDescribe"
                        placeholder="Nhập mô tả"
                        style={{ height: "160px" }}
                        value={roleData.roleDescribe}
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
                      title="Quản lý Hồ sơ Bệnh nhân"
                      options={[
                        "Xem hồ sơ bệnh nhân",
                        "Chỉnh sửa hồ sơ bệnh nhân",
                        "Thêm hồ sơ mới",
                      ]}
                      selectedOptions={roleData.permissionsA.map(
                        (item) => item.permissionName
                      )}
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
            <div className="btn-form-footer-add p-2" onClick={updateRoleData}>
              <ButtonFormAdd btn_name="Cập nhật" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleUpdate;
