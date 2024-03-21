import ModalAddArticle from "../modal/ModalAddArticle";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArticleList({
  setArticles,
  articles,
  addArticleToTable,
}) {
  function showDisponibilityInStock(article) {
    return (
      <div
        style={{
          width: 12,
          height: 12,
          display: "inline-block",
          background: "red",
          borderRadius: 10,
          marginLeft: 10,
        }}
      ></div>
    );
  }

  return (
    <>
      <h1>Articles</h1>
      <ModalAddArticle setArticles={setArticles} articles={articles} />
      <div className="mt-3">
        <ListGroup>
          {articles.map((article, index) => (
            <ListGroupItem key={index} onClick={() => addArticleToTable(index)}>
              <span>{article.name}</span>
              <span className="float-right">
                {article.pUnit} € {showDisponibilityInStock(article)}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
