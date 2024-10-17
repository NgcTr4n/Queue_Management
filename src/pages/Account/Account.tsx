import React from "react";
import Layout from "../../layout/Layout";
import avatar from "../../assets/avatar/ava1.jpg";
import "./Account.css";
import IconCam from "../../components/Icon/IconCam/IconCam";
const Account = () => {
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
                <h3 className="display-3">Phạm Võ Ngọc Trân</h3>
              </div>
            </div>
          </div>
          <div className="col-sm form-account">
            <form action="">
              <div className="form-group">
                <label className="label" htmlFor="tennguoidung">Tên người dùng</label> <br />
                <input
                  type="text"
                  className="form-control"
                  id="tennguoidung"
                  name="tennguoidung"
                  placeholder="Phạm Võ Ngọc Trân"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="sodienthoai">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  id="sodienthoai"
                  name="sodienthoai"
                  placeholder="0767375921"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="sodienthoai">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="adminSSO1@domain.com"
                  disabled
                />
              </div>
            </form>
          </div>
          <div className="col-sm form-account">
            <form action="">
              <div className="form-group">
                <label className="label" htmlFor="tendangnhap">Tên đăng nhập </label>
                <input
                  type="text"
                  className="form-control"
                  id="tendangnhap"
                  name="tendangnhap"
                  placeholder="phamvongoctran02"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="matkhau">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="matkhau"
                  name="matkhau"
                  placeholder="311940211"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="vaitro">Vai trò</label>
                <input
                  type="text"
                  className="form-control"
                  id="vaitro"
                  name="vaitro"
                  placeholder="Kế toán"
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
