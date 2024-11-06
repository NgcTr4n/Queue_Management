// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";
import ServiceNameWithSeeMore from "./ServiceNameWithSeeMore"; // Adjust the path as needed

type TableRow = {
  id: string;
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  serviceName: string;
  deviceType: string;
  accountName: string;
  status: string;
  connection: string;
};

type DevicePageProps = {
  devices: TableRow[];
};

const DevicePage: React.FC<DevicePageProps> = ({ devices }) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Mã thiết bị", key: "deviceCode" },
    { label: "Tên thiết bị", key: "deviceName" },
    { label: "Địa chỉ IP", key: "ipAddress" },
    { label: "Trạng thái hoạt động", key: "status" },
    { label: "Trạng thái kết nối", key: "connection" },
    { label: "Dịch vụ sử dụng", key: "serviceName" },
    { label: "", key: "detail" },
    { label: "", key: "update" },
  ];

  const itemsPerPage = 6; // Define how many items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedDevices, setPaginatedDevices] = useState<TableRow[]>([]);

  useEffect(() => {
    // Update the paginated devices whenever the devices prop or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedDevices(devices.slice(startIndex, endIndex));
  }, [devices, currentPage]); // Dependency array includes devices

  const totalPages = Math.ceil(devices.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDetailClick = (id: string) => {
    console.log("Navigating to details for device:", id); // Xem ID tại đây

    navigate(`/device/${id}`);
  };

  const handleUpdateClick = (id: string) => {
    navigate(`/device/${id}/update`);
  };

  const tableData = paginatedDevices.map((row) => ({
    ...row,
    serviceName: (
      <ServiceNameWithSeeMore serviceName={row.serviceName} maxLength={30} />
    ),
    detail: (
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleDetailClick(row.id);
          }}
        >
          Chi tiết
        </a>
      </div>
    ),
    update: (
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleUpdateClick(row.id);
          }}
        >
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

export default DevicePage;
