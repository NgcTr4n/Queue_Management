// src/components/ServiceNameWithSeeMore.tsx
import React, { useState } from "react";

type ServiceNameWithSeeMoreProps = {
  serviceName: string;
  maxLength?: number;
};

const ServiceNameWithSeeMore: React.FC<ServiceNameWithSeeMoreProps> = ({
  serviceName,
  maxLength = 20,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div style={containerStyle}>
      {isExpanded ? (
        <span>{serviceName}</span>
      ) : (
        <span>
          {serviceName.length > maxLength
            ? `${serviceName.slice(0, maxLength)}...`
            : serviceName}
        </span>
      )}
      {serviceName.length > maxLength && (
        <div onClick={toggleExpanded} style={seeMoreStyle}>
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </div>
      )}
    </div>
  );
};

// Inline styles
const containerStyle: React.CSSProperties = {
  whiteSpace: "normal",
  lineHeight: 1.5,
};

const seeMoreStyle: React.CSSProperties = {
  color: "#4277FF",
  cursor: "pointer",
  textDecoration: "underline",
};

export default ServiceNameWithSeeMore;
