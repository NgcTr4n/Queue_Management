// src/PageOne.tsx
import React, { useState, useEffect } from 'react';
import TableComponent from '../TableComponent';
import PaginationComponent from '../PaginationComponent';

type TableRow = {
  serviceCode: string;       // Mã dịch vụ
  serviceName: string;       // Tên dịch vụ
  serviceDescribe: string;   // Mô tả dịch vụ
  status: string;            // Trạng thái hoạt động
};

const ServicePage: React.FC = () => {
  const columns = [
    { label: 'Mã dịch vụ', key: 'serviceCode' },
    { label: 'Tên dịch vụ', key: 'serviceName' },
    { label: 'Mô tả', key: 'serviceDescribe' }, // Mô tả dịch vụ
    { label: 'Trạng thái hoạt động', key: 'status' },
  ];

  const allData: TableRow[] = [
    { serviceCode: 'KIO_01', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_02', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_03', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_04', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_05', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_06', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_07', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_08', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_09', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_10', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_11', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_12', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_13', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
    { serviceCode: 'KIO_14', serviceName: 'Kiosk', serviceDescribe: 'Hoạt động', status: 'Hoạt động' },
    { serviceCode: 'KIO_15', serviceName: 'Kiosk', serviceDescribe: 'Ngưng hoạt động', status: 'Ngưng hoạt động' },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<TableRow[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allData.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TableComponent columns={columns} data={data} />
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ServicePage;
