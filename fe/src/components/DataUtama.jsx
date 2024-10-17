import { Row, Col, Form } from "react-bootstrap";

export const DataUtama = (props) => {
  const { data } = props;

  return (
    <>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="nomor_pengajuan">
            <Form.Label>Nomer Pengajuan</Form.Label>
            <Form.Control type="text" value={data.nomor_pengajuan} disabled />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="tanggal_pengajuan">
            <Form.Label>Tanggal Pengajuan</Form.Label>
            <Form.Control type="text" value={data.tanggal_pengajuan} disabled />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="nomor_pendaftaran">
            <Form.Label>Nomor Pendaftaran</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nomor Pendaftaran"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="tanggal_pendaftaran">
            <Form.Label>Tanggal Pendaftaran</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tanggal Pendaftaran"
              disabled
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="kantor_pabean">
            <Form.Label>Kantor Pabean</Form.Label>
            <Form.Select
              aria-label="kantor_pabean"
              defaultValue={data.ur_pabean_asal}
            >
              <option>Open this select menu</option>
              <option value={data.ur_pabean_asal}>{data.ur_pabean_asal}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="skep_fasilitas">
            <Form.Label>SKEP Fasilitas</Form.Label>
            <Form.Select aria-label="skep_fasilitas" disabled></Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="jenis_pib">
            <Form.Label>Jenis PIB</Form.Label>
            <Form.Select
              aria-label="jenis_pib"
              defaultValue={data.ur_jenis_pib}
              disabled
            >
              <option>Open this select menu</option>
              <option value={data.ur_jenis_pib}>{data.ur_jenis_pib}</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="jenis_impor">
            <Form.Label>Jenis Impor</Form.Label>
            <Form.Select
              aria-label="jenis_impor"
              defaultValue={data.ur_jenis_impor}
              disabled
            >
              <option>Open this select menu</option>
              <option value={data.ur_jenis_impor}>{data.ur_jenis_impor}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="cara_pembayaran">
            <Form.Label>Cara Pembayaran</Form.Label>
            <Form.Select
              aria-label="cara_pembayaran"
              defaultValue={data.ur_cara_bayar}
              disabled
            >
              <option>Open this select menu</option>
              <option value={data.ur_cara_bayar}>{data.ur_cara_bayar}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="transaksi">
            <Form.Label>Transaksi</Form.Label>
            <Form.Select
              aria-label="transaksi"
              defaultValue={data.ur_transaksi_impor}
              disabled
            >
              <option>Open this select menu</option>
              <option value={data.ur_transaksi_impor}>
                {data.ur_transaksi_impor}
              </option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};
