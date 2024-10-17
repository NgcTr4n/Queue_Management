import { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Layout.css";
import Header from "../components/Header/Header";
import { BreadcrumbsProvider } from "../hooks/useBreadcrumbs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
        <Sidebar />
        <div className="content">
        <BreadcrumbsProvider>

          <Header />
          {children}
          </BreadcrumbsProvider>

        </div>
    </div>
  );
};

export default Layout;
