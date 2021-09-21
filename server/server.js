const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const bodyParser = require("body-parser");

const app = express();
const port = 8000; // this port shows in the browser. not database port
const database = "eduearth";
const institutiontable = "institution";
const userstable = "users";

app.use(cors());
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  db.query(
    `create table if not exists ${database}.${userstable} (id bigint(8) primary key auto_increment,  name varchar(255) not null )`,
    function (err, result) {
      if (err) throw err;
      console.log("Table created : eduearth.users");
    }
  );
});

app.get("/", (req, res) => {
  db.query(`select * from ${database}.${institutiontable};`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.post("/manageInstitution", function (req, res) {
  const institutionname = req.body.institutionname;
  const institutionaddress = req.body.institutionaddress;
  const institutionphone = req.body.institutionphone;

  db.query(
    `insert into ${database}.${institutiontable} set institutionname = ?, instituitionaddress = ?, institutionphone = ?`,
    [institutionname, institutionaddress, institutionphone],
    function (err, result) {
      console.log(institutionname);
      if (err) console.log(err);
      res.send("Successfully added institution");
    }
  );
});

app.get("/manageInstitution", (req, res) => {
  db.query(`select * from ${database}.${institutiontable};`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});
