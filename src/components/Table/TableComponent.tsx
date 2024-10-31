// src/TableComponent.tsx
import React from "react";
import "./TableComponent.css"; // Import your CSS for styles

type TableColumn = {
  label: string;
  key: string;
};

type TableRow = {
  [key: string]: any; // Use index signature for dynamic keys
};

interface TableComponentProps {
  columns: TableColumn[];
  data: TableRow[];
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, data }) => {
  return (
    <table className="table-striped">
      <thead className="thead-light">
        <tr className="table-content">
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.key === "status" ? (
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          row[column.key] === "Hoạt động"
                            ? "#34CD26"
                            : "#EC3740",
                        marginRight: "5px",
                      }}
                    ></span>
                    <span style={{ marginLeft: "2px" }}>{row[column.key]}</span>
                  </div>
                ) : column.key === "connection" ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          row[column.key] === "Kết nối" ? "#34CD26" : "#EC3740",
                        marginRight: "5px",
                      }}
                    ></span>
                    <span style={{ marginLeft: "2px" }}>{row[column.key]}</span>{" "}
                  </>
                ) : column.key === "services" ? (
                  <>
                    {row[column.key]}
                    <br />
                    <a
                      href={`/services/${row.deviceCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem thêm
                    </a>
                  </>
                ) : column.key === "statusLevel" ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          row[column.key] === "Đang chờ"
                            ? "#4277FF"
                            : row[column.key] === "Đã sử dụng"
                            ? "#7E7D88"
                            : "#E73F3F",
                        marginRight: "5px",
                      }}
                    ></span>
                    <span style={{ marginLeft: "2px" }}>{row[column.key]}</span>{" "}
                  </>
                ) : column.key === "serviceStatus" ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          row[column.key] === "Đã hoàn thành"
                            ? "#34CD26"
                            : row[column.key] === "Đang thực hiện"
                            ? "#5490EB"
                            : "#6C7585",
                        marginRight: "5px",
                      }}
                    ></span>
                    <span style={{ marginLeft: "2px" }}>{row[column.key]}</span>{" "}
                  </>
                ) : (
                  row[column.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
