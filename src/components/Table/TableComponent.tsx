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
          <th></th>
          <th></th>
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
                          row[column.key] === "Hoạt động" ? "green" : "red",
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
                          row[column.key] === "Kết nối" ? "green" : "red",
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
                    >Xem thêm</a>
                    
                  </>
                ) : (
                  row[column.key]
                )}
              </td>
            ))}
            <td><a href="">Chi tiết</a></td>
            <td><a href="">Cập nhật</a></td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
