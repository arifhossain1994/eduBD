const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");

const app = express();
const port = 8000;
const table = "eduearth.institution";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.query(`SELECT * FROM ${table};`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});
