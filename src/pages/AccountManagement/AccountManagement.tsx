import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import SearchInput from "../../components/SearchInput/SearchInput"; // Import the new SearchInput component
import ButtonAdd from "../../components/Button/ButtonAdd/ButtonAdd";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import NumberPage from "../../components/Table/TablePage/NumberPage";
import AccountPage from "../../components/Table/TablePage/AccountPage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../hooks/hooks";
import { fetchAccount } from "../../features/accountSlice";

const optionRole = [
  { label: "Tất cả", value: "tatca" },
  { label: "Hoạt động", value: "hoatdong" },
  { label: "Ngưng hoạt động", value: "ngunghoatdong" },
];

const AccountManagement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { account, loading, error } = useAppSelector((state) => state.account);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("tatca");
  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);
  const handleSelectRole = (value: string) => {
    setSelectedRole(value);
    console.log("Selected role:", value);
  };
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Search input:", value);
  };
  const filteredAccount = account.filter((account) => {
    const matchesSearchTerm =
      account.accountName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.fullName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "tatca" ||
      (selectedRole === "hoatdong" && account.status === "Hoạt động") ||
      (selectedRole === "ngunghoatdong" &&
        account.status === "Ngưng hoạt động");

    return matchesSearchTerm && matchesRole;
  });
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3" style={{ color: "#FF9138" }}>
              Dánh sách tài khoản
            </h3>
            <div
              className="dashboard-statistical row"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <p>Tên vai trò</p>
                    <div className="d-flex align-items-center device-dropdown">
                      <CustomDropdown
                        style={{ width: "100%" }}
                        options={optionRole}
                        onSelect={handleSelectRole}
                      />
                    </div>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-3 d-flex justify-content-end align-items-center">
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
                      <AccountPage account={filteredAccount} />
                    </div>
                  </div>
                  <div className="col-1" style={{ marginTop: "15px" }}>
                    <ButtonAdd
                      btn_name="Thêm tài khoản"
                      showPage="/setting/accountmanagement/add"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountManagement;
