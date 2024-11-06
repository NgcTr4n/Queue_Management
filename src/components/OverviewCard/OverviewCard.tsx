import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar, faTasks } from "@fortawesome/free-solid-svg-icons";

interface OverviewCardProps {
  percentage: number;
  count: number;
  title: string;
  activeLabel: string;
  activeCount: number;
  inactiveLabel: string;
  inactiveCount: number;
  color: string;
}
const DeviceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M3.75663 1.1665H10.2375C12.3141 1.1665 12.8333 1.68567 12.8333 3.7565V7.449C12.8333 9.52567 12.3141 10.039 10.2433 10.039H3.75663C1.68579 10.0448 1.16663 9.52567 1.16663 7.45484V3.7565C1.16663 1.68567 1.68579 1.1665 3.75663 1.1665Z"
      stroke="#FF7506"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 10.0449V12.8333"
      stroke="#FF7506"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.16663 7.5835H12.8333"
      stroke="#FF7506"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.375 12.8335H9.625"
      stroke="#FF7506"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
  >
    <path
      d="M14.7704 5.7304C14.7704 7.04284 14.0591 8.22267 12.9266 9.04368C12.8874 9.07098 12.8658 9.11778 12.8639 9.16459L12.8149 10.4419C12.809 10.6135 12.6189 10.713 12.4739 10.6213L11.3864 9.94074C11.3864 9.94074 11.3864 9.94074 11.3845 9.94074C11.3218 9.89978 11.2453 9.88808 11.1748 9.90954C10.5282 10.1104 9.82472 10.2216 9.08797 10.2216C9.07817 10.2216 9.06837 10.2216 9.05857 10.2216C9.07817 10.0928 9.08797 9.96219 9.08797 9.82958C9.08797 7.99841 7.2108 6.51436 4.89472 6.51436C4.41857 6.51436 3.96201 6.57676 3.53485 6.69182C3.44863 6.38175 3.40356 6.05802 3.40356 5.7265C3.40356 3.24398 5.94695 1.2334 9.08601 1.2334C12.227 1.2373 14.7704 3.24983 14.7704 5.7304Z"
      stroke="#4277FF"
      stroke-width="1.10526"
      stroke-miterlimit="10"
    />
    <path
      d="M3.53675 6.69482C1.88884 7.1414 0.703369 8.37779 0.703369 9.83259C0.703369 10.7999 1.22851 11.6716 2.06324 12.2781C2.09263 12.2995 2.1083 12.3327 2.11026 12.3678L2.14553 13.3097C2.14945 13.4364 2.29053 13.5086 2.3983 13.4423L3.20168 12.9391C3.20756 12.9352 3.2154 12.9294 3.22128 12.9255C3.25067 12.9021 3.28986 12.8943 3.32513 12.906C3.81108 13.062 4.34013 13.1478 4.89662 13.1478C7.04419 13.1478 8.81555 11.8705 9.06048 10.2246"
      stroke="#4277FF"
      stroke-width="1.10526"
      stroke-miterlimit="10"
    />
  </svg>
);

const LevelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <g clip-path="url(#clip0_0_3235)">
      <path
        d="M1.16663 9.9165L6.99996 12.8332L12.8333 9.9165"
        stroke="#35C75A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.16663 7L6.99996 9.91667L12.8333 7"
        stroke="#35C75A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.99996 1.1665L1.16663 4.08317L6.99996 6.99984L12.8333 4.08317L6.99996 1.1665Z"
        stroke="#35C75A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_3235">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const OverviewCard: React.FC<OverviewCardProps> = ({
  percentage,
  count,
  title,
  activeLabel,
  activeCount,
  inactiveLabel,
  inactiveCount,
  color,
}) => {
  // Define icons based on title or provide a default
  const getIcon = (title: string) => {
    switch (title) {
      case "Thiết bị":
        return <DeviceIcon />;
      case "Dịch vụ":
        return <ServiceIcon />;

      default:
        return <LevelIcon />; // fallback icon
    }
  };

  return (
    <div className="p-3 mb-3 shadow-sm card-overview">
      <Row>
        <Col className="d-flex align-item-center">
          <div className="d-flex align-items-center">
            <div
              className="position-relative"
              style={{ width: "60px", height: "60px" }}
            >
              <div
                className="outer-circle position-absolute top-0 start-0 rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  background: `conic-gradient(${color} ${percentage}%, #e0e0e0 ${percentage}%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="gap-circle"
                  style={{
                    position: "relative",
                    width: "54px",
                    height: "54px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                  }}
                >
                  <div
                    className="position-relative"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "3px solid #EAEAEC",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="inner-circle rounded-circle"
                      style={{
                        position: "absolute",
                        zIndex: 3,
                        width: "45px",
                        height: "45px",
                        background: `conic-gradient(#7E7D88 ${
                          100 - percentage
                        }%, transparent ${100 - percentage}%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#333",
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        className="gap-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "#535261",
                            lineHeight: "24px",
                          }}
                        >
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-3 d-flex flex-column justify-content-center">
              <h5
                className="m-0"
                style={{
                  fontSize: "24px",
                  color: "#535261",
                  fontWeight: "800",
                  lineHeight: "36px",
                }}
              >
                {count.toLocaleString()}
              </h5>
              <div className="d-flex align-items-center">
                <span style={{ marginRight: "8px", color }}>
                  {getIcon(title)}
                </span>
                <p
                  className="m-0"
                  style={{
                    color,
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "21px",
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-flex align-item-center">
          <div className="mt-3">
            <p className="m-0">
              <span className="text-muted">{activeLabel}</span>:{" "}
              <span
                style={{
                  color,
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "18px",
                }}
              >
                {activeCount.toLocaleString()}
              </span>
            </p>
            <p className="m-0">
              <span className="text-muted">{inactiveLabel}</span>:{" "}
              <span
                style={{
                  color,
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "18px",
                }}
              >
                {inactiveCount.toLocaleString()}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OverviewCard;
