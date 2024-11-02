// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  roleName: string;
  userCount: number;
  description: string;
};

const RolePage: React.FC = () => {
  const columns = [
    { label: "Tên vai trò", key: "roleName" },
    { label: "Số người dùng", key: "userCount" },
    { label: "Mô tả", key: "description" },
    { label: "", key: "update" },
  ];

  const allData: TableRow[] = [
    {
      roleName: "Kế toán",
      userCount: 6,
      description: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
      roleName: "Bác sĩ",
      userCount: 6,
      description: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
      roleName: "Lễ tân",
      userCount: 6,
      description: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
  ];
  const navigate = useNavigate();

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
  const handleUpdateClick = (roleName: string) => {
    navigate(`/setting/rolemangament/${roleName}/update`);
  };
  const tableData = data.map((row) => ({
    ...row,
    update: (
      <div>
        <a href="" onClick={() => handleUpdateClick(row.roleName)}>
          Cập nhật
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

export default RolePage;
