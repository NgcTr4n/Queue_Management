// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  serialNumber: string;
  customerName: string;
  serviceName: string;
  issueTime: string;
  expirationTime: string;
  statusLevel: string;
  source: string;
};

const NumberPage: React.FC = () => {
  const columns = [
    { label: "STT", key: "serialNumber" },
    { label: "Tên khách hàng", key: "customerName" },
    { label: "Tên dịch vụ", key: "serviceName" },
    { label: "Thời gian cấp", key: "issueTime" },
    { label: "Hạn sử dụng", key: "expirationTime" },
    { label: "Trạng thái", key: "statusLevel" },
    { label: "Nguồn cấp", key: "source" },
    { label: "", key: "action" },
  ];

  const allData: TableRow[] = [
    {
      serialNumber: "2010001",
      customerName: "Lê Huỳnh Ái Vân",
      serviceName: "Khám tim mạch",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đang chờ",
      source: "Kiosk",
    },
    {
      serialNumber: "2010002",
      customerName: "Huỳnh Ái Vân",
      serviceName: "Khám sản - Phụ khoa",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đã sử dụng",
      source: "Kiosk",
    },
    {
      serialNumber: "2010003",
      customerName: "Lê Ái Vân",
      serviceName: "Khám răng hàm mặt",
      issueTime: "14:35 - 07/11/2021",
      expirationTime: "14:35 - 12/11/2021",
      statusLevel: "Đang chờ",
      source: "Hệ thống",
    },
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
  const tableData = data.map((row) => ({
    ...row,
    action: (
      <div>
        <a href="#!">Chi tiết</a>
      </div>
    ),
  }));
  return (
    <div>
      <TableComponent columns={columns} data={tableData} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NumberPage;
