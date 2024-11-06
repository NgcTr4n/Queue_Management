import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import avatar from "../../assets/avatar/ava1.jpg";
import "./Account.css";
import IconCam from "../../components/Icon/IconCam/IconCam";
import { auth, db } from "../../services/firebase"; // Make sure to import your Firebase config
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import { fetchAccount, fetchAccountByEmail } from "../../features/accountSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
interface UserData {
  fullName: string;
  phoneNumber: string;
  email: string;
  accountName: string;
  password: string; // Note: Storing passwords like this is not recommended
  roleName: string;
}
const Account = () => {
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch type
  const [userData, setUserData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    accountName: "",
    password: "",
    roleName: "",
  });

  useEffect(() => {
    const fetchAccount = async () => {
      const user = auth.currentUser; // Get the current user

      if (user && user.email) {
        // Check if user is not null and has an email
        try {
          const account = await dispatch(
            fetchAccountByEmail(user.email)
          ).unwrap();
          setUserData(account);
        } catch (error) {
          console.error("Error fetching account:", error);
        }
      } else {
        console.log("No user is signed in or user has no email.");
      }
    };

    fetchAccount();
  }, [dispatch]);
  return (
    <Layout>
      <div className="account-main container">
        <div className="row">
          <div className="col-sm">
            <div className="bg-account d-flex justify-content-center align-items-center">
              <div className="ava-account">
                <div className="ava-account-main">
                  <img src={avatar} alt="" /> <IconCam />
                </div>

                <br />
                <h3 className="display-3" style={{ textAlign: "center" }}>
                  {userData.fullName || "Tên người dùng"}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-sm form-account">
            <form action="">
              <div className="form-group">
                <label className="label" htmlFor="tennguoidung">
                  Tên người dùng
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="tennguoidung"
                  name="tennguoidung"
                  placeholder="Phạm Võ Ngọc Trân"
                  value={userData.fullName}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="sodienthoai">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sodienthoai"
                  name="sodienthoai"
                  placeholder="0767375921"
                  value={userData.phoneNumber}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="adminSSO1@domain.com"
                  value={userData.email}
                  disabled
                />
              </div>
            </form>
          </div>
          <div className="col-sm form-account">
            <form action="">
              <div className="form-group">
                <label className="label" htmlFor="tendangnhap">
                  Tên đăng nhập{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tendangnhap"
                  name="tendangnhap"
                  placeholder="phamvongoctran02"
                  value={userData.accountName}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="matkhau">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="matkhau"
                  name="matkhau"
                  placeholder="311940211"
                  value={userData.password}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="vaitro">
                  Vai trò
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="vaitro"
                  name="vaitro"
                  placeholder="Admin"
                  value={userData.roleName}
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
