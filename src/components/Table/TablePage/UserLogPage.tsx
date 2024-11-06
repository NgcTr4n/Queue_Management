// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  accountName: string;
  impactTime: string;
  executingIP: string;
  executionAction: string;
};

const UserLogPage: React.FC = () => {
  const columns = [
    { label: "Tên đăng nhập", key: "accountName" },
    { label: "Thời gian tác động", key: "impactTime" },
    { label: "IP thực hiện", key: "executingIP" },
    { label: "EmaThao tác thực hiện", key: "executionAction" },
  ];

  const allData: TableRow[] = [
    {
      accountName: "tuyetnguyen@12",
      impactTime: "01/12/2021 15:12:17",
      executingIP: "192.168.3.1",
      executionAction: "Cập nhật thông tin dịch vụ DV_01",
    },
    {
      accountName: "tuyetnguyen@12",
      impactTime: "01/12/2021 15:12:17",
      executingIP: "192.168.3.1",
      executionAction: "Cập nhật thông tin dịch vụ DV_01",
    },
    {
      accountName: "tuyetnguyen@12",
      impactTime: "01/12/2021 15:12:17",
      executingIP: "192.168.3.1",
      executionAction: "Cập nhật thông tin dịch vụ DV_01",
    },
    {
      accountName: "tuyetnguyen@12",
      impactTime: "01/12/2021 15:12:17",
      executingIP: "192.168.3.1",
      executionAction: "Cập nhật thông tin dịch vụ DV_01",
    },
    {
      accountName: "tuyetnguyen@12",
      impactTime: "01/12/2021 15:12:17",
      executingIP: "192.168.3.1",
      executionAction: "Cập nhật thông tin dịch vụ DV_01",
    },
  ];

  const itemsPerPage = 6;
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

export default UserLogPage;
