import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ModalAddTable from "./modal/ModalAddTable";
import { useState } from "react";

export default function TableList({
  setTables,
  tables,
  indexOfSelectTable,
  setIndexOfSelectTable,
}) {
  function sumOfTable(table) {
    let sum = 0;

    table.articles.map((article) => {
      sum += parseFloat(article.pUnit);
    });

    return sum;
  }

  return (
    <>
      <Col md={2}>
        <h1>Tables</h1>
        <ModalAddTable setTables={setTables} tables={tables} />
        <div className="mt-3">
          <ListGroup>
            {tables.map((table, index) => (
              <ListGroupItem
                key={index}
                onClick={() => setIndexOfSelectTable(index)}
                className={
                  table.num == tables[indexOfSelectTable].num ? "active" : ""
                }
              >
                <span>Table {table.num}</span>
                <span className="float-right">
                  <strong>{sumOfTable(table)} €</strong>
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </Col>
      <Col md={3}>
        <div className="align-element-board">
          <ListGroup>
            {tables[indexOfSelectTable].articles.map((article, index) => (
              <ListGroupItem key={index}>
                <span>{article.name}</span>
                <span className="float-right">
                  <strong>{article.pUnit} €</strong>
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </Col>
    </>
  );
}
