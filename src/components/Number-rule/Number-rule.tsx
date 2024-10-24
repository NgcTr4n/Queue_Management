import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Number-rule.css";

const NumberRuleForm: React.FC = () => {
  const [autoIncrement, setAutoIncrement] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [resetDaily, setResetDaily] = useState(false);
  const [rangeStart, setRangeStart] = useState("0001");
  const [rangeEnd, setRangeEnd] = useState("9999");

  return (
    <div className="pt-1 number-rule-form">
      <Form>
        <Form.Group as={Row} controlId="autoIncrement">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Tăng tự động từ:"
              checked={autoIncrement}
              onChange={() => setAutoIncrement(!autoIncrement)}
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={rangeStart}
              onChange={(e) => setRangeStart(e.target.value)}
              disabled={!autoIncrement}
            />
          </Col>
          <Col sm="auto" className="d-flex align-items-center ">
            đến
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={rangeEnd}
              onChange={(e) => setRangeEnd(e.target.value)}
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
              onChange={() => setPrefix(prefix ? "" : "0001")}
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              disabled={!prefix}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="suffix">
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label="Surfix:"
              checked={!!suffix}
              onChange={() => setSuffix(suffix ? "" : "0001")}
            />
          </Col>
          <Col sm="auto">
            <Form.Control
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
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
              onChange={() => setResetDaily(!resetDaily)}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NumberRuleForm;
