import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FormAddTable from "../form/FormAddTable";

export default function ModalAddTable({ setTables, tables }: any) {
  const [show, setShow] = useState(false);
  const [errorNum, setErrorNum] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tableCreate, setTableCreate] = useState({
    num: "",
    articles: [],
  });

  const handleChangeNumTable = (e: any) => {
    setTableCreate({ ...tableCreate, [e.target.name]: e.target.value });
  };

  const handleSubmitTable = () => {
    let stillExist = tables.find((table: any) => table.num == tableCreate.num);

    setErrorNum("");

    if (typeof stillExist == "undefined") {
      // Find why I have to do this to add empty articles in new table
      tableCreate.articles = [];
      // Find why I have to do this to add empty articles in new table
      setTables([...tables, tableCreate]);

      setErrorNum("");
      handleClose();
    } else {
      setErrorNum("Cette table existe déjà.");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter une table
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddTable
            tableCreate={tableCreate}
            handleChangeNumTable={handleChangeNumTable}
          />
          {errorNum !== "" && <span className="error">* {errorNum}</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitTable}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
