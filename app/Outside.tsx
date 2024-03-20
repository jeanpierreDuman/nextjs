import ModalAddArticle from "./ModalAddArticle";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

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

  function sumOfTable(table: object) {
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
    <Container className="mt-5">
      <Row>
        <>
          <h1>Articles</h1>
          <ModalAddArticle setArticles={setArticles} articles={articles} />
          <div>
            {articles.map((article, index) => (
              <Card
                key={index}
                style={{
                  width: 100,
                  height: 95,
                  margin: 5,
                }}
                onClick={() => addArticleToTable(index)}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: 14 }}>
                    {article.name}
                  </Card.Title>
                  <Card.Text>{article.pUnit} €</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
        <Col>
          <h1>Tables</h1>
          <div>
            {tables.map((table, index) => (
              <div key={index} onClick={() => setIndexOfSelectTable(index)}>
                <Card
                  style={{
                    width: "18rem",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Card.Body>
                    <Card.Title>Table {table.num}</Card.Title>
                    <Card.Text>
                      <strong>{sumOfTable(table)} €</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h1>Table {tables[indexOfSelectTable].num}</h1>
          {tables[indexOfSelectTable].articles.map((article, index) => (
            <p key={index}>
              {article.name} - {article.pUnit} €
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
