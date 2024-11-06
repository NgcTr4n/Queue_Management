// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  id: string;
  accountName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  roleName: string;
  status: string;
};
type AccountPageProps = {
  account: TableRow[];
};
const AccountPage: React.FC<AccountPageProps> = ({ account }) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Tên đăng nhập", key: "accountName" },
    { label: "Họ tên", key: "fullName" },
    { label: "Số điện thoại", key: "phoneNumber" },
    { label: "Email", key: "email" },
    { label: "Vai trò", key: "roleName" },
    { label: "Trạng thái hoạt động", key: "status" },
    { label: "", key: "update" },
  ];

  const itemsPerPage = 6; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedAccount, setPaginatedAccount] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedAccount(account.slice(startIndex, endIndex));
  }, [account, currentPage]); // Dependency array includes devices

  const totalPages = Math.ceil(account.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleUpdateClick = (id: string) => {
    navigate(`/setting/accountmanagement/${id}/update`);
  };
  const tableData = paginatedAccount.map((row) => ({
    ...row,
    update: (
      <div>
        <a href="" onClick={() => handleUpdateClick(row.id)}>
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

export default AccountPage;
