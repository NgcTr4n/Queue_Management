// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  accountName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  roleName: string;
  status: string;
};

const AccountPage: React.FC = () => {
  const columns = [
    { label: "Tên đăng nhập", key: "accountName" },
    { label: "Họ tên", key: "fullName" },
    { label: "Số điện thoại", key: "phoneNumber" },
    { label: "Email", key: "email" },
    { label: "Vai trò", key: "roleName" },
    { label: "Trạng thái hoạt động", key: "status" },
    { label: "", key: "update" },
  ];

  const allData: TableRow[] = [
    {
      accountName: "tuyetnguyen@12",
      fullName: "Nguyen Van A",
      phoneNumber: "0919256712",
      email: "tuyetnguyen123@gmail.com",
      roleName: "Kế toán",
      status: "Hoạt động",
    },
    {
      accountName: "tuyetnguyen@10",
      fullName: "Nguyen Van B",
      phoneNumber: "0919236712",
      email: "tuyetnguyen123@gmail.com",
      roleName: "Kế toán",
      status: "Hoạt động",
    },
    {
      accountName: "tuyetnguyen@22",
      fullName: "Nguyen Van C",
      phoneNumber: "0919116712",
      email: "tuyetnguyen222@gmail.com",
      roleName: "Kế toán",
      status: "Ngưng hoạt động",
    },
    {
      accountName: "tuyetnguyen@18",
      fullName: "Nguyen Van D",
      phoneNumber: "0919253715",
      email: "tuyetnguyen232@gmail.com",
      roleName: "Kế toán",
      status: "Hoạt động",
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
    update: (
      <div>
        <a href="#!">Cập nhật</a>
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
