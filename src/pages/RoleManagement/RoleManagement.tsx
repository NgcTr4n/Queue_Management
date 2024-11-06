import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import SearchInput from "../../components/SearchInput/SearchInput";
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import RolePage from "../../components/Table/TablePage/RolePage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../hooks/hooks";
import { fetchRole } from "../../features/roleSlice";
import { fetchAccount } from "../../features/accountSlice";
// const sampleRole = [
//   {
//     roleName: "Kế toán",
//     userCount: 6,
//     roleDesscribe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
//   },
//   {
//     roleName: "Bác sĩ",
//     userCount: 6,
//     roleDesscribe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
//   },
//   {
//     roleName: "Lễ tân",
//     userCount: 6,
//     roleDesscribe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
//   },
// ];
const RoleManagment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { role, loading, error } = useAppSelector((state) => state.role);
  const { account } = useAppSelector((state) => state.account);

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(fetchRole());
    dispatch(fetchAccount());
  }, [dispatch]);
  const handleSearch = (value: string) => {
    setSearchTerm(value);

    console.log("Search input:", value);
  };
  const filteredRole = role.filter((role) =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create a mapping of role names to user counts
  const userCounts = account.reduce((acc, account) => {
    acc[account.roleName] = (acc[account.roleName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Merge the user counts with the roles
  const rolesWithCounts = filteredRole.map((r) => ({
    ...r,
    userCount: userCounts[r.roleName] || 0, // Use the count or default to 0
  }));
  // const filteredRole = role.filter((role) => {
  //   const matchesSearchTerm = role.roleName
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());

  //   return matchesSearchTerm;
  // });

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Danh sách vai trò
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-2"></div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
              </div>
              <div className="col-4"></div>
              <div className="col-2 d-flex justify-content-end align-items-center">
                <div className="device-search">
                  <p style={{ width: "230px" }}>Từ khoá</p>
                  <SearchInput
                    placeholder="Nhập từ khóa"
                    onSearch={handleSearch}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "16px" }}>
              <div className="col">
                <div className="device-list">
                  <RolePage role={rolesWithCounts} />
                </div>
              </div>
              <div className="col-1" style={{ marginTop: "15px" }}>
                <ButtonAdd
                  btn_name="Thêm vai trò"
                  showPage="/setting/rolemanagement/add"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoleManagment;
