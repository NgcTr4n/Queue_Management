import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";

interface BreadcrumbsContextType {
  breadcrumbs: string[];
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(
  undefined
);

const breadcrumbConfig: Record<string, string[]> = {
  "/dashboard": ["Dashboard"],
  "/device": ["Thiết bị", "Danh sách thiết bị"],
  "/device/add": ["Thiết bị", "Danh sách thiết bị", "Thêm thiết bị"],
  "/service": ["Dịch vụ", "Danh sách dịch vụ"],
  "/service/add": ["Dịch vụ", "Danh sách dịch vụ", "Thêm dịch vụ"],
  "/number": ["Cấp số", "Danh sách cấp số"],
  "/number/add": ["Cấp số", "Danh sách cấp số", "Cấp số mới"],
  "/report": ["Báo cáo", "Lập báo cáo"],
  "/account": ["Thông tin cá nhân"],
  "/setting/rolemanagement": ["Cài đặt hệ thống", "Quản lý vai trò"],
  "/setting/rolemanagement/add": [
    "Cài đặt hệ thống",
    "Quản lý vai trò",
    "Thêm vai trò",
  ],

  "/setting/accountmanagement": ["Cài đặt hệ thống", "Quản lý tài khoản"],
  "/setting/accountmanagement/add": [
    "Cài đặt hệ thống",
    "Quản lý tài khoản",
    "Thêm tài khoản",
  ],

  "/setting/userlog": ["Cài đặt hệ thống", "Nhật ký hoạt động"],
};
const getDynamicBreadcrumbs = (path: string) => {
  const deviceDetailRegex = /^\/device\/([^/]+)/; // Match /device/:id
  const deviceUpdateRegex = /^\/device\/([^/]+)\/update/; // Match /device/:id/update
  const serviceDetailRegex = /^\/service\/([^/]+)/; // Match /service/:id
  const serviceUpdateRegex = /^\/service\/([^/]+)\/update/; // Match /service/:id/update
  const numberDetailRegex = /^\/number\/([^/]+)/; // Match /number/:id
  const numberUpdateRegex = /^\/number\/([^/]+)\/update/; // Match /number/:id/update
  const roleManagementDetailRegex = /^\/setting\/rolemangament\/([^/]+)/; // Match /setting/rolemangement/:id
  const roleManagementUpdateRegex =
    /^\/setting\/rolemangament\/([^/]+)\/update/; // Match /setting/rolemangement/:id/update
  const accountManagementDetailRegex = /^\/setting\/accountmanagement\/([^/]+)/; // Match /setting/accountmanagement/:id
  const accountManagementUpdateRegex =
    /^\/setting\/accountmanagement\/([^/]+)\/update/; // Match /setting/accountmanagement/:id/update

  // Check for update paths first
  if (deviceUpdateRegex.test(path)) {
    return ["Thiết bị", "Danh sách thiết bị", "Cập nhật thiết bị"];
  }
  if (deviceDetailRegex.test(path)) {
    return ["Thiết bị", "Danh sách thiết bị", "Chi tiết thiết bị"];
  }
  if (serviceUpdateRegex.test(path)) {
    return ["Dịch vụ", "Danh sách dịch vụ", "Cập nhật dịch vụ"];
  }
  if (serviceDetailRegex.test(path)) {
    return ["Dịch vụ", "Danh sách dịch vụ", "Chi tiết dịch vụ"];
  }
  if (numberUpdateRegex.test(path)) {
    return ["Cấp số", "Danh sách cấp số", "Cập nhật cấp số"];
  }
  if (numberDetailRegex.test(path)) {
    return ["Cấp số", "Danh sách cấp số", "Chi tiết cấp số"];
  }
  if (roleManagementUpdateRegex.test(path)) {
    return ["Cài đặt hệ thống", "Quản lý vai trò", "Cập nhật vai trò"];
  }
  if (roleManagementDetailRegex.test(path)) {
    return ["Cài đặt hệ thống", "Quản lý vai trò", "Chi tiết vai trò"];
  }
  if (accountManagementUpdateRegex.test(path)) {
    return ["Cài đặt hệ thống", "Quản lý tài khoản", "Cập nhật tài khoản"];
  }
  if (accountManagementDetailRegex.test(path)) {
    return ["Cài đặt hệ thống", "Quản lý tài khoản", "Chi tiết tài khoản"];
  }

  return [];
};

// Thêm các đường dẫn tương ứng cho các breadcrumb
export const breadcrumbPaths: Record<string, string[]> = {
  "/dashboard": ["/dashboard"],
  "/device": ["/device"],
  "/device/add": ["/device", "/device", "/device/add"],

  "/service": ["/service"],
  "/service/add": ["/service", "/service", "/service/add"],

  "/number": ["/number"],
  "/number/add": ["/number", "/number", "/number/add"],

  "/report": ["/report"],
  "/account": ["/account"],
  "/setting/rolemanagement": ["/setting/rolemanagement"],
  "/setting/accountmanagement": ["/setting/accountmanagement"],
  "/setting/userlog": ["/setting/userlog"],
};

export const BreadcrumbsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Current Path:", currentPath);
    const currentBreadcrumbs = breadcrumbConfig[currentPath] ||
      getDynamicBreadcrumbs(currentPath) || ["Home"];
    console.log("Current Breadcrumbs:", currentBreadcrumbs);
    setBreadcrumbs(currentBreadcrumbs);
  }, [location.pathname]);

  // useEffect(() => {
  //   const currentBreadcrumbs = breadcrumbConfig[location.pathname] ||
  //     getDynamicBreadcrumbs(location.pathname) || ["Dashboard"]; // Handle dynamic paths // Fallback to a default breadcrumb
  //   setBreadcrumbs(currentBreadcrumbs);
  // }, [location.pathname]);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = (): BreadcrumbsContextType => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbsProvider");
  }
  return context;
};
