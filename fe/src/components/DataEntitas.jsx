import { Button, InputGroup, Row, Col, Form } from "react-bootstrap";
import searchIcon from "../assets/search.svg";

export const DataEntitas = (props) => {
  const { data } = props;

  return (
    <>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="jenis_pemberitahuan">
            <Form.Label>Jenis Pemberitahuan</Form.Label>
            <Form.Select
              aria-label="jenis_pemberitahuan"
              defaultValue={data.ur_entitas_pemberitahu}
              disabled
            >
              <option>Open this select menu</option>
              <option value={data.ur_entitas_pemberitahu}>
                {data.ur_entitas_pemberitahu}
              </option>
            </Form.Select>
          </Form.Group>
          <Col />
          <Col />
        </Row>
        <div
          className="border-top"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBlock: "1rem",
            paddingBlockStart: "1rem",
          }}
        >
          <div className="container-title">
            <h5>Pengusaha</h5>
            <div
              style={{
                borderBlockEnd: "0.4rem solid #209bc0",
                maxInlineSize: "30px",
              }}
            />
          </div>
        </div>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="jenis_identitas">
            <Form.Label>Jenis Identitas</Form.Label>
            <Form.Select aria-label="jenis_identitas" disabled></Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="nib">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Label>NIB</Form.Label>
              <Form.Check type="checkbox" id="nib" label="Tanpa NIB" />
            </div>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.nib
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Col>
            <Form.Label>No Identitas</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                value={
                  data.ur_entitas_pemberitahu === "PENGUSAHA"
                    ? data.pengusaha.nomor_identitas
                    : ""
                }
                disabled
              />
              <InputGroup.Text id="basic-addon2">
                <img
                  src={searchIcon}
                  alt="Search"
                  style={{ width: "20px", height: "20px" }}
                />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Form.Group className="mb-3" controlId="tanggal_pendaftaran">
              <Form.Label>No Identitas (16 Digit)</Form.Label>
              <Form.Control
                type="text"
                placeholder="No Identitas (16 Digit)"
                disabled
              />
            </Form.Group>
          </Col>
          <Form.Group as={Col} className="mb-3" controlId="tanggal_pendaftaran">
            <Form.Label>Nama Perusahaan</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.nama_identitas
                  : ""
              }
              disabled
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="provinsi">
            <Form.Label>Provinsi</Form.Label>
            <Form.Select
              aria-label="provinsi"
              defaultValue={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.provinsi_identitas
                  : ""
              }
              disabled
            >
              <option>Open this select menu</option>
              <option
                value={
                  data.ur_entitas_pemberitahu === "PENGUSAHA"
                    ? data.pengusaha.provinsi_identitas
                    : ""
                }
              >
                {data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.provinsi_identitas
                  : ""}
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Kota_Kabupaten">
            <Form.Label>Kota / Kabupaten</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.kota_identitas
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="kecamatan">
            <Form.Label>Kecamatan</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.kecamatan
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="kecamatan">
            <Form.Label>Kode Pos</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.kode_pos
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="RT_RW">
            <Form.Label>RT / RW</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.rt_rw
                  : ""
              }
              disabled
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="telephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type="text"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.tlp_identitas
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.email_identitas
                  : ""
              }
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="status"
              defaultValue={
                data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.status
                  : ""
              }
              disabled
            >
              <option>Open this select menu</option>
              <option
                value={
                  data.ur_entitas_pemberitahu === "PENGUSAHA"
                    ? data.pengusaha.status
                    : ""
                }
              >
                {data.ur_entitas_pemberitahu === "PENGUSAHA"
                  ? data.pengusaha.status
                  : ""}
              </option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};
