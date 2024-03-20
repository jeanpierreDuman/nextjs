"use client";

import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./index.css";
import Outside from "./Outside";

export default function Default() {
  return (
    <div>
      <Container fluid>
        <Row style={{ background: "#009999", color: "white" }}>
          <Col style={{ padding: 20 }}>
            <Container>
              <Outside />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
