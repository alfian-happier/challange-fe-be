import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import refreshIcon from "../assets/refresh.svg";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.png";
import equalIcon from "../assets/equal.png";

export const DataPungutan = () => {
  return (
    <>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="incoterms">
            <Form.Label>Incoterms</Form.Label>
            <Form.Select aria-label="incoterms" defaultValue="1" disabled>
              <option>Open this select menu</option>
              <option value="1">Free on Board</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="valuta">
            <Form.Label>Valuta</Form.Label>
            <Form.Select aria-label="valuta" defaultValue="1" disabled>
              <option>Open this select menu</option>
              <option value="1">Euro</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="nomor_pendaftaran">
            <Form.Label>Kurs</Form.Label>
            <Form.Control type="text" value="17,639.0800" disabled />
          </Form.Group>
          <Col
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <Button>
              <img
                src={refreshIcon}
                alt="Refresh"
                style={{ width: "15px", height: "15px" }}
              />
            </Button>
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="nilai">
            <Form.Label>Nilai</Form.Label>
            <Form.Control type="text" value="50,000.00" disabled />
          </Form.Group>
          <Col
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <img
              src={plusIcon}
              alt="Plus"
              style={{ width: "10px", height: "10px" }}
            />
          </Col>
          <Form.Group as={Col} className="mb-3" controlId="biaya_tambahan">
            <Form.Label>Biaya Tambahan</Form.Label>
            <Form.Control type="text" value="500.00" disabled />
          </Form.Group>
          <Col
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <img
              src={minusIcon}
              alt="Minus"
              style={{ width: "10px", height: "10px" }}
            />
          </Col>
          <Form.Group as={Col} className="mb-3" controlId="biaya_pengurang">
            <Form.Label>Biaya Pengurang</Form.Label>
            <Form.Control type="text" value="1,000.00" disabled />
          </Form.Group>
          <Col
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <img
              src={plusIcon}
              alt="Plus"
              style={{ width: "10px", height: "10px" }}
            />
          </Col>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="voluntary_declaration"
          >
            <Form.Check
              type="checkbox"
              id="voluntaryDeclaration"
              label="Voluntary Declaration"
              defaultChecked
              className="mb-2"
            />
            <Form.Control type="text" value="0" />
          </Form.Group>
          <Col
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <img
              src={equalIcon}
              alt="Equal"
              style={{ width: "10px", height: "10px" }}
            />
          </Col>
          <Form.Group as={Col} className="mb-3" controlId="nilai_fob">
            <Form.Label>Nilai FOB</Form.Label>
            <Form.Control type="text" value="54,500.00" disabled />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="asuransi_bayar_di">
            <Form.Label>Asuransi Bayar di</Form.Label>
            <Form.Select
              aria-label="asuransi_bayar_di"
              defaultValue={1}
              disabled
            >
              <option>Open this select menu</option>
              <option value={1}>Luar Negeri</option>
              <option value={2}>Dalam Negeri</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="asuransi">
            <Form.Label>Asuransi</Form.Label>
            <Form.Control type="text" value="5,000.00" disabled />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="freight">
            <Form.Label>Freight</Form.Label>
            <Form.Control type="text" value="400.00" disabled />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="flag_kontainer">
            <Form.Label>Flag Kontainer</Form.Label>
            <Form.Select aria-label="flag_kontainer" defaultValue={1} disabled>
              <option>Open this select menu</option>
              <option value={1}>Kontainer</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            paddingBlockEnd: "2rem",
          }}
        >
          <Button variant="warning">Kelengkapan Data</Button>
          <Button variant="secondary">Simpan</Button>
        </div>
      </Form>
    </>
  );
};
