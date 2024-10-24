// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  serialNumber: string;
  serviceName: string;
  issueTime: string;
  statusLevel: string;
  source: string;
};

const ReportPage: React.FC = () => {
  const columns = [
    { label: "Số thứ tự", key: "serialNumber" },
    { label: "Tên dịch vụ", key: "serviceName" },
    { label: "Thời gian cấp", key: "issueTime" },
    { label: "Tình trạng", key: "statusLevel" },
    { label: "Nguồn cấp", key: "source" },
  ];

  const allData: TableRow[] = [
    {
      serialNumber: "2010001",
      serviceName: "Khá tim mạch",
      issueTime: "07:20 - 07/10/2021",
      statusLevel: "Đang chờ",
      source: "Kiosk",
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

  return (
    <div>
      <TableComponent columns={columns} data={data} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ReportPage;
