const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();

app.use(bodyParser.json());

const db_config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "pungutan_db",
};

// Connect to the database
function connectToDatabase() {
  const db = mysql.createConnection(db_config);

  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed: " + err);

      setTimeout(() => {
        console.log("Retrying database connection...");
        connectToDatabase();
      }, 3000);
      return;
    }

    console.log("Connected to the database");

    setupApiEndpoints(db);
  });
}

function setupApiEndpoints(db) {
  app.get("/api/headers", (req, res) => {
    const sql = "SELECT * FROM headers";

    db.query(sql, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database error when fetching headers" });
      }
      res.status(200).json(result);
    });
  });

  app.get("/api/headers/:id", (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM headers WHERE id = ?", [id], (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database error when fetching header" });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Header not found" });
      }
      res.status(200).json(result[0]);
    });
  });

  app.get("/api/pungutan", (req, res) => {
    // SQL query to join pungutan and headers based on header_id
    const sql = `
        SELECT 
            pungutan.id, 
            headers.incoterms, 
            headers.valuta, 
            headers.kurs,
            pungutan.nilai, 
            pungutan.biaya_tambahan, 
            pungutan.biaya_pengurangan, 
            pungutan.voluntary_declaration, 
            pungutan.nilai_fob, 
            pungutan.asuransi_di, 
            pungutan.asuransi, 
            pungutan.freight, 
            pungutan.cif, 
            pungutan.cif_rp 
        FROM pungutan
        INNER JOIN headers ON pungutan.header_id = headers.id
    `;

    db.query(sql, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database error when fetching pungutan data" });
      }
      res.status(200).json(result);
    });
  });

  app.get("/api/pungutan/:id", (req, res) => {
    const { id } = req.params;

    const sql = `
        SELECT 
            pungutan.id, 
            headers.incoterms, 
            headers.valuta, 
            headers.kurs,
            pungutan.nilai, 
            pungutan.biaya_tambahan, 
            pungutan.biaya_pengurangan, 
            pungutan.voluntary_declaration, 
            pungutan.nilai_fob, 
            pungutan.asuransi_di, 
            pungutan.asuransi, 
            pungutan.freight, 
            pungutan.cif, 
            pungutan.cif_rp 
        FROM pungutan
        INNER JOIN headers ON pungutan.header_id = headers.id
        WHERE pungutan.id = ?
    `;

    db.query(sql, [id], (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database error when fetching pungutan data" });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Pungutan record not found" });
      }
      res.status(200).json(result[0]);
    });
  });

  // Insert new headers
  app.post("/api/headers", (req, res) => {
    const { incoterms, valuta, kurs } = req.body;

    // Check for missing required fields in headers
    const errorMsg = checkMissingFields(req.body, [
      "incoterms",
      "valuta",
      "kurs",
    ]);

    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }

    db.query(
      `INSERT INTO headers (incoterms, valuta, kurs) VALUES (?, ?, ?)`,
      [incoterms, valuta, kurs],
      (headerErr, headerResult) => {
        if (headerErr) {
          return res
            .status(500)
            .json({ error: "Database error on inserting header" });
        }

        const headerId = headerResult.insertId; // Get the new header's ID
        return res.status(200).json({
          message: "Header created successfully",
          header_id: headerId,
        });
      }
    );
  });

  // Update existing headers
  app.put("/api/headers/:id", (req, res) => {
    const { id } = req.params;
    const { incoterms, valuta, kurs } = req.body;

    db.query(
      `UPDATE headers SET incoterms = ?, valuta = ?, kurs = ? WHERE id = ?`,
      [incoterms, valuta, kurs, id],
      (headerErr) => {
        if (headerErr) {
          return res
            .status(500)
            .json({ error: "Database error on updating header" });
        }

        return res.status(200).json({ message: "Header updated successfully" });
      }
    );
  });

  // Define the function to check for missing required fields
  function checkMissingFields(data, requiredFields) {
    for (let field of requiredFields) {
      if (!data[field] && data[field] !== 0) {
        // Return error if field is missing or undefined, except when it's 0
        return `The field '${field}' is missing.`;
      }
    }
    return null;
  }

  app.post("/api/pungutan", (req, res) => {
    const {
      header_id, // Expecting `header_id` to reference existing headers
      nilai,
      biaya_tambahan,
      biaya_pengurangan,
      voluntary_declaration,
      asuransi_di,
      asuransi,
      freight,
    } = req.body;

    // Check for missing required fields
    const errorMsg = checkMissingFields(req.body, [
      "header_id", // Ensure header_id is provided to reference headers
      "nilai",
      "biaya_tambahan",
      "biaya_pengurangan",
      "voluntary_declaration",
      "asuransi_di",
      "asuransi",
      "freight",
    ]);

    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }

    // Retrieve 'kurs' from 'headers' table using the provided header_id
    db.query(
      `SELECT kurs FROM headers WHERE id = ?`,
      [header_id],
      (headerErr, headerResult) => {
        if (headerErr) {
          return res
            .status(500)
            .json({ error: "Database error on fetching header kurs" });
        }

        if (headerResult.length === 0) {
          return res.status(404).json({ error: "Header not found" });
        }

        const kurs = headerResult[0].kurs; // Get kurs from the query result

        // Calculate nilai_fob, cif, and cif_rp using retrieved kurs
        const nilai_fob =
          nilai + biaya_tambahan - biaya_pengurangan + voluntary_declaration;
        const cif = nilai_fob + asuransi + freight;
        const cif_rp = cif * kurs;

        // Insert new pungutan record for the existing header
        db.query(
          `INSERT INTO pungutan 
          (header_id, nilai, biaya_tambahan, biaya_pengurangan, voluntary_declaration, asuransi_di, asuransi, freight, nilai_fob, cif, cif_rp) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            header_id, // Reuse the header_id from the payload
            nilai,
            biaya_tambahan,
            biaya_pengurangan,
            voluntary_declaration,
            asuransi_di,
            asuransi,
            freight,
            nilai_fob,
            cif,
            cif_rp,
          ],
          (pungutanErr) => {
            if (pungutanErr) {
              return res
                .status(500)
                .json({ error: "Database error on inserting pungutan" });
            }

            return res
              .status(200)
              .json({ message: "Pungutan data created successfully" });
          }
        );
      }
    );
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connectToDatabase();
