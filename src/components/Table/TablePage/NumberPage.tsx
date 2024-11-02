// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  serialNumber: string;
  customerName: string;
  serviceName: string;
  issueTime: string;
  expirationTime: string;
  statusLevel: string;
  source: string;
};
type LevelPageProps = {
  level: TableRow[];
};

const NumberPage: React.FC<LevelPageProps> = ({ level }) => {
  const navigate = useNavigate();

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

  const itemsPerPage = 8; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedLevel, setPaginatedLevel] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedLevel(level.slice(startIndex, endIndex));
  }, [level, currentPage]); // Dependency array includes devices

  const totalPages = Math.ceil(level.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDetailClick = (serialNumber: string) => {
    navigate(`/number/${serialNumber}`);
  };
  const tableData = paginatedLevel.map((row) => ({
    ...row,
    action: (
      <div>
        <a href="" onClick={() => handleDetailClick(row.serialNumber)}>
          Chi tiết
        </a>
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
