import React, { useEffect, useState } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  serialNumber: string;
  serviceStatus: string;
};

type ServiceDetailPageProps = {
  serialNumbers: string[]; // Accept serial numbers as an array
  serviceStatus: string;
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serialNumbers,
  serviceStatus,
}) => {
  // Map serial numbers to the table format
  const data: TableRow[] = serialNumbers.map((serialNumber) => ({
    serialNumber,
    serviceStatus, // Assuming all have the same status for simplicity
  }));

  const columns = [
    { label: "Số thứ tự", key: "serialNumber" },
    { label: "Trạng thái", key: "serviceStatus" },
  ];
  const itemsPerPage = 6; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedRole, setPaginatedRole] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedRole(data.slice(startIndex, endIndex));
  }, [data, currentPage]); // Dependency array includes devices
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const tableData = paginatedRole.map((row) => ({
    ...row,
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

export default ServiceDetailPage;
