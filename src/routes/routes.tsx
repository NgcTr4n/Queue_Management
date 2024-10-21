import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login/Login"
import ForgotPassword from "../pages/Login/ForgotPassword/ForgotPassword"
import Dashboard from "../pages/Dashboard/Dashboard"
import Device from "../pages/Device/Device"
import NumberManage from "../pages/Number/NumberManage"
import UserLog from "../pages/UserLog/UserLog"
import Report from "../pages/Report/Report"
import Service from "../pages/Service/Service"
import Account from "../pages/Account/Account"
import DeviceAdd from "../pages/Device/DeviceAdd"
import ServiceAdd from "../pages/Service/ServiceAdd"


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/device",
        element: <Device/>
    },
    {
        path:"/device/add",
        element: <DeviceAdd/>
    },
    {
        path: "/number",
        element: <NumberManage/>
    },
    {
        path: "/report",
        element: <Report/>
    },
    {
        path: "/userlog",
        element: <UserLog/>
    },
    {
        path: "/service",
        element: <Service/>
    },
    {
        path: "/service/add",
        element: <ServiceAdd/>
    },
    {
        path: "/account",
        element: <Account/>
    }
   
])