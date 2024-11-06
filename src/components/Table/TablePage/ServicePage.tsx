// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  id: string;
  serviceCode: string;
  serviceName: string;
  serviceDescribe: string;
  status: string;
};
type ServicePageProps = {
  services: TableRow[];
};
const ServicePage: React.FC<ServicePageProps> = ({ services }) => {
  const navigate = useNavigate();
  const columns = [
    { label: "Mã dịch vụ", key: "serviceCode" },
    { label: "Tên dịch vụ", key: "serviceName" },
    { label: "Mô tả", key: "serviceDescribe" },
    { label: "Trạng thái hoạt động", key: "status" },
    { label: "", key: "detail" },
    { label: "", key: "update" },
  ];

  const itemsPerPage = 6; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedServices, setPaginatedDevices] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedDevices(services.slice(startIndex, endIndex));
  }, [services, currentPage]); // Dependency array includes devices

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleDetailClick = (id: string) => {
    navigate(`/service/${id}`);
  };
  const handleUpdateClick = (id: string) => {
    navigate(`/service/${id}/update`);
  };
  const tableData = paginatedServices.map((row) => ({
    ...row,
    detail: (
      <div>
        <a href="" onClick={() => handleDetailClick(row.id)}>
          Chi tiết
        </a>
      </div>
    ),
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

export default ServicePage;
