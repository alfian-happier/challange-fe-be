import { useState, useEffect } from "react";
import { Tab, Tabs, Container, Button } from "react-bootstrap";
import { data_utama, data_entitas } from "./apis/api.js";
import inswLogo from "./assets/insw.png";
import { DataUtama } from "./components/dataUtama.jsx";
import { DataEntitas } from "./components/DataEntitas.jsx";
import { DataPungutan } from "./components/DataPungutan.jsx";
import "./App.css";

function App() {
  const [dataUtama, setDataUtama] = useState({});
  const [dataEntitas, setDataEntitas] = useState({});
  const [isValidUtama, setIsValidUtama] = useState(false);
  const [isValidEntitas, setIsValidEntitas] = useState(false);
  const [loadingUtama, setLoadingUtama] = useState(true);
  const [loadingEntitas, setLoadingEntitas] = useState(true);
  const [errorUtama, setErrorUtama] = useState(null);
  const [errorEntitas, setErrorEntitas] = useState(null);

  const [activeKey, setActiveKey] = useState("key-1");

  const tabKeys = ["key-1", "key-2", "key-3"];

  const handleNext = () => {
    const currentIndex = tabKeys.indexOf(activeKey);
    if (currentIndex < tabKeys.length - 1) {
      setActiveKey(tabKeys[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabKeys.indexOf(activeKey);
    if (currentIndex > 0) {
      setActiveKey(tabKeys[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const fetchDataUtama = async () => {
      try {
        const res = await fetch(`${data_utama}`);
        const fetched = await res.json();

        if (fetched.status) {
          setIsValidUtama(true);
          setDataUtama(fetched.data);
        } else {
          setIsValidUtama(false);
        }
        setLoadingUtama(false);
      } catch (error) {
        console.error("Error fetching data_utama:", error);
        setErrorUtama(error.message);
        setLoadingUtama(false);
      }
    };

    fetchDataUtama();
  }, []);

  // Fetch for data_entitas
  useEffect(() => {
    const fetchDataEntitas = async () => {
      try {
        const res = await fetch(`${data_entitas}`);
        const fetched = await res.json();

        if (fetched.status) {
          setIsValidEntitas(true);
          setDataEntitas(fetched.data);
        } else {
          setIsValidEntitas(false);
        }
        setLoadingEntitas(false);
      } catch (error) {
        console.error("Error fetching data_entitas:", error);
        setErrorEntitas(error.message);
        setLoadingEntitas(false);
      }
    };

    fetchDataEntitas();
  }, []);

  if (loadingUtama || loadingEntitas) return <p>Loading...</p>;

  if (errorUtama) return <p>Error in data_utama: {errorUtama}</p>;
  if (errorEntitas) return <p>Error in data_entitas: {errorEntitas}</p>;

  return (
    <>
      <div className="navbar">
        <div>
          <a href="#">
            <img src={inswLogo} className="logo" alt="INSW logo" />
          </a>
        </div>
      </div>
      <div className="sub-navbar">
        / <a href="#">Beranda</a> / SSM QC
      </div>
      <div className="background-body">
        <div className="main-container">
          <div className="logo-container">
            <div className="each-logo">
              <img src="https://img.icons8.com/?size=100&id=53373&format=png&color=000000" />
              <span style={{ color: "red" }}>Pemberitahuan</span>
            </div>
            <div className="each-logo">
              <img src="https://img.icons8.com/?size=100&id=53514&format=png&color=000000" />
              <span>Transportasi</span>
            </div>
            <div className="each-logo">
              <img src="https://img.icons8.com/?size=100&id=i426cfMKcE3l&format=png&color=000000" />
              <span>Dokumen</span>
            </div>
            <div className="each-logo">
              <img src="https://img.icons8.com/?size=100&id=2531&format=png&color=000000" />
              <span>Komoditi</span>
            </div>
            <div className="each-logo">
              <img src="https://img.icons8.com/?size=100&id=11162&format=png&color=000000" />
              <span>Layanan</span>
            </div>
          </div>
          <div className="header-container">
            <div className="container-title">
              <h5>Data Pemberitahuan</h5>
              <div className="border-line" />
            </div>
            No Pengajuan : {dataUtama.nomor_pengajuan || "Loading..."} | KSWP :{" "}
            {isValidUtama ? "VALID" : "INVALID"} | Jenis API : 02
          </div>
          <Tabs
            id="controlled-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
          >
            <Tab
              eventKey="key-1"
              title="Data Utama"
              className="border border-top-0 border-bottom-0"
            >
              <div className="tab-container">
                <DataUtama data={dataUtama} />
              </div>
            </Tab>
            <Tab
              eventKey="key-2"
              title="Data Entitas"
              className="border border-top-0 border-bottom-0"
            >
              <Container fluid className="p-3">
                <DataEntitas data={dataEntitas} />
              </Container>
            </Tab>
            <Tab
              eventKey="key-3"
              title="Data Pungutan"
              className="border border-top-0 border-bottom-0"
            >
              <Container fluid className="p-3">
                <DataPungutan />
              </Container>
            </Tab>
          </Tabs>
          <div className="button-container border border-top-0 rounded-bottom">
            <Button
              variant="outline-primary"
              onClick={handlePrevious}
              disabled={activeKey === "key-1"}
            >
              Sebelumnya
            </Button>
            <Button
              variant="outline-primary"
              onClick={handleNext}
              disabled={activeKey === "key-3"}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
