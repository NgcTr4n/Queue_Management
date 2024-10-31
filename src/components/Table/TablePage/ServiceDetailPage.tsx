// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  serialNumber: string;
  serviceStatus: string;
};

const ServicePage: React.FC = () => {
  const columns = [
    { label: "Số thứ tự", key: "serialNumber" },
    { label: "Trạng thái", key: "serviceStatus" },
  ];

  const allData: TableRow[] = [
    {
      serialNumber: "2010001",
      serviceStatus: "Đã hoàn thành",
    },
    {
      serialNumber: "2010002",
      serviceStatus: "Đã hoàn thành",
    },
    {
      serialNumber: "2010003",
      serviceStatus: "Đang thực hiện",
    },
    {
      serialNumber: "2010004",
      serviceStatus: "Vắng",
    },
    {
      serialNumber: "2010005",
      serviceStatus: "Đã hoàn thành",
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

export default ServicePage;
