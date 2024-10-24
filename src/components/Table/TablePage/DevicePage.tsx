// src/PageOne.tsx
import React, { useState, useEffect } from "react";
import TableComponent from "../TableComponent";
import PaginationComponent from "../PaginationComponent";

type TableRow = {
  deviceCode: string;
  deviceName: string;
  ipAddress: string;
  status: string;
  connection: string;
  services: string;
};

const DevicePage: React.FC = () => {
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

  const allData: TableRow[] = [
    {
      deviceCode: "KIO_01",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.10",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tim mạch, Khám mắt...",
    },
    {
      deviceCode: "KIO_02",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.11",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_03",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.12",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tim mạch, Khám mắt...",
    },
    {
      deviceCode: "KIO_04",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.13",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_05",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.14",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám tim mạch, Khám mắt...",
    },
    {
      deviceCode: "KIO_06",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.15",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tổng quát, Khám tai mũi họng...",
    },
    {
      deviceCode: "KIO_07",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.16",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám sức khỏe, Khám nội tiết...",
    },
    {
      deviceCode: "KIO_08",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.17",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tim mạch, Khám da liễu...",
    },
    {
      deviceCode: "KIO_09",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.18",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_10",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.19",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tim mạch, Khám tâm lý...",
    },
    {
      deviceCode: "KIO_11",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.20",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám nội tiết, Khám phụ khoa...",
    },
    {
      deviceCode: "KIO_12",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.21",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám tổng quát, Khám mắt...",
    },
    {
      deviceCode: "KIO_13",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.22",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám tim mạch, Khám thần kinh...",
    },
    {
      deviceCode: "KIO_14",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.23",
      status: "Hoạt động",
      connection: "Kết nối",
      services: "Khám sức khỏe, Khám mắt...",
    },
    {
      deviceCode: "KIO_15",
      deviceName: "Kiosk",
      ipAddress: "192.168.1.24",
      status: "Ngưng hoạt động",
      connection: "Mất kết nối",
      services: "Khám tim mạch, Khám tiêu hóa...",
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
    detail: (
      <div>
        <a href="#!">Chi tiết</a>
      </div>
    ),
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

export default DevicePage;
