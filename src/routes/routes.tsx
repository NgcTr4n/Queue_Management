import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword/ForgotPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import Device from "../pages/Device/Device";
import NumberManage from "../pages/Number/NumberManage";
import UserLog from "../pages/UserLog/UserLog";
import Report from "../pages/Report/Report";
import Service from "../pages/Service/Service";
import Account from "../pages/Account/Account";
import DeviceAdd from "../pages/Device/DeviceAdd";
import ServiceAdd from "../pages/Service/ServiceAdd";
import LevelAdd from "../pages/Number/LevelAdd";
import RoleManagement from "../pages/RoleManagement/RoleManagement";
import AccountManagement from "../pages/AccountManagement/AccountManagement";
import DeviceDetailPage from "../pages/Device/DeviceDetailPage";
import LevelDetail from "../pages/Number/LevelDetail";
import ServiceDetail from "../pages/Service/ServiceDetail";
import RoleAdd from "../pages/RoleManagement/RoleAdd";
import AccountManagementAdd from "../pages/AccountManagement/AccountManagementAdd";
import ServiceUpdate from "../pages/Service/ServiceUpdate";
import DeviceUpdate from "../pages/Device/DeviceUpdate";
import RoleUpdate from "../pages/RoleManagement/RoleMangementUpdate";
import AccountManagementUpdate from "../pages/AccountManagement/AccountManagementUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/device",
    element: <Device />,
  },
  {
    path: "/device/add",
    element: <DeviceAdd />,
  },
  {
    path: "/device/:deviceCode",
    element: <DeviceDetailPage />,
  },
  {
    path: "/device/:deviceCode/update",
    element: <DeviceUpdate />,
  },
  {
    path: "/number",
    element: <NumberManage />,
  },
  {
    path: "/number/add",
    element: <LevelAdd />,
  },
  {
    path: "/number/:serialNumber",
    element: <LevelDetail />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/setting/userlog",
    element: <UserLog />,
  },
  {
    path: "/setting/rolemanagement",
    element: <RoleManagement />,
  },
  {
    path: "/setting/rolemangament/:roleName/update",
    element: <RoleUpdate />,
  },
  {
    path: "/setting/rolemanagement/add",
    element: <RoleAdd />,
  },
  {
    path: "/setting/accountmanagement",
    element: <AccountManagement />,
  },
  {
    path: "/setting/accountmanagement/add",
    element: <AccountManagementAdd />,
  },
  {
    path: "/setting/accountmanagement/:accountName/update",
    element: <AccountManagementUpdate />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/service/add",
    element: <ServiceAdd />,
  },
  {
    path: "/service/:serviceCode/update",
    element: <ServiceUpdate />,
  },
  {
    path: "/service/:serviceCode",
    element: <ServiceDetail />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);
