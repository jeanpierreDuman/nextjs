import Form from "react-bootstrap/Form";

export default function FormAddTable({
  tableCreate,
  handleChangeNumTable,
}: any) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="pUnit">
        <Form.Label>Numéro de la table</Form.Label>
        <Form.Control
          type="text"
          name="num"
          value={tableCreate.num}
          onChange={handleChangeNumTable}
        />
      </Form.Group>
    </div>
  );
}
