import ModalAddArticle from "./ModalAddArticle";
import { useState } from "react";
import { Col, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Outside() {
  const [articles, setArticles] = useState([
    { name: "Potatoes", pUnit: "1.5" },
    { name: "Steack", pUnit: "1.5" },
    { name: "Tartare de thon", pUnit: "19" },
    { name: "Salade caesar", pUnit: "17" },
    { name: "Potatoes", pUnit: "1.5" },
    { name: "Steack", pUnit: "1.5" },
    { name: "Tartare de thon", pUnit: "19" },
    { name: "Salade caesar", pUnit: "17" },
    { name: "Steack", pUnit: "1.5" },
    { name: "Tartare de thon", pUnit: "19" },
    { name: "Salade caesar", pUnit: "17" },
    { name: "Potatoes", pUnit: "1.5" },
    { name: "Steack", pUnit: "1.5" },
    { name: "Tartare de thon", pUnit: "19" },
    { name: "Salade caesar", pUnit: "17" },
  ]);

  const [indexOfSelectTable, setIndexOfSelectTable] = useState(0);

  const [tables, setTables] = useState([
    {
      num: 1,
      articles: [
        { name: "Potatoes", pUnit: "1.5" },
        { name: "Steack", pUnit: "1.5" },
      ],
    },
    {
      num: 2,
      articles: [
        { name: "Steack", pUnit: "1.5" },
        { name: "Tartare de thon", pUnit: "19" },
        { name: "Salade caesar", pUnit: "17" },
      ],
    },
  ]);

  function sumOfTable(table: any) {
    let sum = 0;

    table.articles.map((article: any) => {
      sum += parseFloat(article.pUnit);
    });

    return sum;
  }

  const addArticleToTable = (index: any) => {
    let articleSelected = articles[index];
    let newTables = tables.map((table, indexTable) => {
      if (indexTable === indexOfSelectTable) {
        let newArticle = [...table.articles, articleSelected];
        table.articles = newArticle;
      }
      return table;
    });

    setTables(newTables);
  };

  return (
    <div className="mt-4">
      <Row>
        <Col md={3}>
          <h1>Articles</h1>
          <ModalAddArticle setArticles={setArticles} articles={articles} />
          <div className="mt-3">
            <ListGroup>
              {articles.map((article, index) => (
                <ListGroupItem
                  key={index}
                  onClick={() => addArticleToTable(index)}
                >
                  <span>{article.name}</span>
                  <span className="float-right">{article.pUnit} €</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col md={2}>
          <h1>Tables</h1>
          <Button variant="primary">Ajouter une table</Button>
          <div className="mt-3">
            <ListGroup>
              {tables.map((table, index) => (
                <ListGroupItem
                  key={index}
                  onClick={() => setIndexOfSelectTable(index)}
                  className={
                    index == tables[indexOfSelectTable].num - 1 ? "active" : ""
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
        <Col md={3}>
          <div className="align-element-board"></div>
        </Col>
      </Row>
    </div>
  );
}
