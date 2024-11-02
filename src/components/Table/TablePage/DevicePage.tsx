// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";
import { useNavigate } from "react-router-dom";

type TableRow = {
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  status: string;
  connection: string;
  services: string;
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
    { label: "Dịch vụ sử dụng", key: "services" },
    { label: "", key: "detail" },
    { label: "", key: "update" },
  ];

  const itemsPerPage = 8; // Define how many items to show per page
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

  const handleDetailClick = (deviceCode: string) => {
    navigate(`/device/${deviceCode}`);
  };

  const handleUpdateClick = (deviceCode: string) => {
    navigate(`/device/${deviceCode}/update`);
  };

  const tableData = paginatedDevices.map((row) => ({
    ...row,
    detail: (
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleDetailClick(row.deviceCode);
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
            handleUpdateClick(row.deviceCode);
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
