"use client";

import { Container, Row } from "react-bootstrap";
import "./index.css";
import Board from "./Board";

export default function Default() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Board />
        </Row>
      </Container>
    </div>
  );
}
