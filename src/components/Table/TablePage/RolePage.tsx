// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  roleName: string;
  userCount: number;
  roleDesscribe: string;
};
type RolePageProps = {
  role: TableRow[];
};
const RolePage: React.FC<RolePageProps> = ({ role }) => {
  const navigate = useNavigate();
  const columns = [
    { label: "Tên vai trò", key: "roleName" },
    { label: "Số người dùng", key: "userCount" },
    { label: "Mô tả", key: "roleDesscribe" },
    { label: "", key: "update" },
  ];

  const itemsPerPage = 8; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedRole, setPaginatedRole] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedRole(role.slice(startIndex, endIndex));
  }, [role, currentPage]); // Dependency array includes devices

  const totalPages = Math.ceil(role.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleUpdateClick = (roleName: string) => {
    navigate(`/setting/rolemangament/${roleName}/update`);
  };
  const tableData = paginatedRole.map((row) => ({
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
