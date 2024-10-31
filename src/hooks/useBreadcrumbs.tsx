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
  "/device/:deviceCode": [
    "Thiết bị",
    "Danh sách thiết bị",
    "Chi tiết thiết bị",
  ],
  "/service": ["Dịch vụ", "Danh sách dịch vụ"],
  "/service/add": ["Dịch vụ", "Danh sách dịch vụ", "Thêm dịch vụ"],
  "/number": ["Cấp số", "Danh sách cấp số"],
  "/number/add": ["Cấp số", "Danh sách cấp số", "Cấp số mới"],
  "/report": ["Báo cáo", "Lập báo cáo"],
  "/account": ["Thông tin cá nhân"],
  "/setting/rolemanagement": ["Cài đặt hệ thống", "Quản lý vai trò"],
  "/setting/accountmanagement": ["Cài đặt hệ thống", "Quản lý tài khoản"],
  "/setting/userlog": ["Cài đặt hệ thống", "Nhật ký hoạt động"],
};

// Thêm các đường dẫn tương ứng cho các breadcrumb
export const breadcrumbPaths: Record<string, string[]> = {
  "/dashboard": ["/dashboard"],
  "/device": ["/device"],
  "/device/add": ["/device", "/device", "/device/add"],
  "/device/:deviceCode": ["/device", "/device", "/device/:deviceCode"],

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
    const currentBreadcrumbs = breadcrumbConfig[location.pathname] || [];
    setBreadcrumbs(currentBreadcrumbs);
  }, [location.pathname]);

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
