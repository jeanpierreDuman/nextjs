import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormAddArticle from "./FormAddArticle";
import { useState } from "react";

export default function ModalAddArticle({ setArticles, articles }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [articleCreate, setArticleCreate] = useState({
    name: "",
    pUnit: "",
  });

  const handleChangeNomArticle = (e: any) => {
    setArticleCreate({ ...articleCreate, [e.target.name]: e.target.value });
  };

  const handleChangeMontantArticle = (e: any) => {
    setArticleCreate({ ...articleCreate, [e.target.name]: e.target.value });
  };

  const handleSubmitArticle = () => {
    setArticles([...articles, articleCreate]);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un article
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddArticle
            articleCreate={articleCreate}
            handleChangeNomArticle={handleChangeNomArticle}
            handleChangeMontantArticle={handleChangeMontantArticle}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitArticle}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
