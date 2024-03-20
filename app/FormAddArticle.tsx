import Form from "react-bootstrap/Form";

export default function FormAddArticle({
  articleCreate,
  handleChangeNomArticle,
  handleChangeMontantArticle,
}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nom article</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={articleCreate.nomArticle}
          onChange={handleChangeNomArticle}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="pUnit">
        <Form.Label>Montant article</Form.Label>
        <Form.Control
          type="text"
          name="pUnit"
          value={articleCreate.montantArticle}
          onChange={handleChangeMontantArticle}
        />
      </Form.Group>
    </div>
  );
}
