import React, { useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Number-rule.css";

interface NumberRuleFormProps {
  numberRule: {
    autoIncrement: boolean;
    prefix: string;
    suffix: string;
    resetDaily: boolean;
    rangeStart: string;
    rangeEnd: string;
  };
  onChange: (numberRule: {
    autoIncrement: boolean;
    prefix: string;
    suffix: string;
    resetDaily: boolean;
    rangeStart: string;
    rangeEnd: string;
  }) => void;
}

const NumberRuleForm: React.FC<NumberRuleFormProps> = ({
  numberRule,
  onChange,
}) => {
  const { autoIncrement, prefix, suffix, resetDaily, rangeStart, rangeEnd } =
    numberRule;

  // Whenever any state changes, notify the parent
  useEffect(() => {
    onChange(numberRule);
  }, [autoIncrement, prefix, suffix, resetDaily, rangeStart, rangeEnd]);

  return (
    <div className="pt-1 number-rule-form">
      <Form>
        <Form.Group as={Row} controlId="autoIncrement">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Tăng tự động từ:"
              checked={autoIncrement}
              onChange={() =>
                onChange({ ...numberRule, autoIncrement: !autoIncrement })
              }
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={rangeStart}
              onChange={(e) =>
                onChange({ ...numberRule, rangeStart: e.target.value })
              }
              disabled={!autoIncrement}
            />
          </Col>
          <Col sm="auto" className="d-flex align-items-center">
            đến
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={rangeEnd}
              onChange={(e) =>
                onChange({ ...numberRule, rangeEnd: e.target.value })
              }
              disabled={!autoIncrement}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="prefix">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Prefix:"
              checked={!!prefix}
              onChange={() =>
                onChange({ ...numberRule, prefix: prefix ? "" : "0001" })
              }
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={prefix}
              onChange={(e) =>
                onChange({ ...numberRule, prefix: e.target.value })
              }
              disabled={!prefix}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="suffix">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Suffix:"
              checked={!!suffix}
              onChange={() =>
                onChange({ ...numberRule, suffix: suffix ? "" : "0001" })
              }
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={suffix}
              onChange={(e) =>
                onChange({ ...numberRule, suffix: e.target.value })
              }
              disabled={!suffix}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="resetDaily">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Reset mỗi ngày"
              checked={resetDaily}
              onChange={() =>
                onChange({ ...numberRule, resetDaily: !resetDaily })
              }
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NumberRuleForm;
