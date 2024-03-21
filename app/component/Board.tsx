import Calculator from "./Calculator";
import ArticleList from "./ArticleList";
import TableList from "../TableList";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Board() {
  const [articles, setArticles] = useState([
    { name: "Tartare de thon", pUnit: "19" },
    { name: "Salade caesar", pUnit: "17" },
    { name: "Potatoes", pUnit: "1.5" },
    { name: "Steack", pUnit: "1.5" },
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
          <ArticleList
            setArticles={setArticles}
            articles={articles}
            addArticleToTable={addArticleToTable}
          />
        </Col>
        <TableList
          setTables={setTables}
          tables={tables}
          indexOfSelectTable={indexOfSelectTable}
          setIndexOfSelectTable={setIndexOfSelectTable}
        />
        <Col md={3}>
          <div className="align-element-board">
            <Calculator />
          </div>
        </Col>
      </Row>
    </div>
  );
}
