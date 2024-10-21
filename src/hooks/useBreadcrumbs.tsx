import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbsContextType {
    breadcrumbs: string[];
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

const breadcrumbConfig: Record<string, string[]> = {
    '/dashboard': ['Dashboard'],
    '/device': ['Thiết bị', 'Danh sách thiết bị'],
    '/device/add': ['Thiết bị', 'Danh sách thiết bị', 'Thêm thiết bị'],
    '/service': ['Dịch vụ', 'Danh sách dịch vụ'],
    '/service/add': ['Dịch vụ', 'Danh sách dịch vụ', 'Thêm dịch vụ'],
    '/number': ['Cấp số', 'Danh sách cấp số'],
    '/report': ['Báo cáo', 'Lập báo cáo'],
    '/account': ['Thông tin cá nhân']
};

// Thêm các đường dẫn tương ứng cho các breadcrumb
export const breadcrumbPaths: Record<string, string[]> = {
    '/dashboard': ['/dashboard'],
    '/device': ['/device'],
    '/device/add': ['/device', '/device', '/device/add'],
    '/service': ['/service'],
    '/service/add': ['/service', '/service', '/service/add'],

    '/number': ['/number'],
    '/report': ['/report'],
    '/account': ['/account']
};

export const BreadcrumbsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

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
        throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider');
    }
    return context;
};