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

// Create db Tables if not exists
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  db.query(
    `create table if not exists ${database}.${userstable} (id bigint(8) primary key auto_increment,  name varchar(255) not null, email varchar(255) not null )`,
    function (err, result) {
      if (err) throw err;
      console.log("Table created : eduearth.users");
    }
  );
  db.query(
    `create table if not exists ${database}.${institutiontable} (id bigint(8) primary key auto_increment,  institutionName varchar(255) not null, institutionAddress varchar(255) not null, institutionPhone varchar(20) not null,isActive boolean)`,
    function (err, result) {
      if (err) throw err;
      console.log("Table created : eduearth.institution");
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
  const institutionName = req.body.institutionName;
  const institutionAddress = req.body.institutionAddress;
  const institutionPhone = req.body.institutionPhone;
  db.query(
    `insert into ${database}.${institutiontable} set institutionName = ?, institutionAddress = ?, institutionPhone = ?`,
    [institutionName, institutionAddress, institutionPhone],
    function (err, result) {
      console.log(institutionName);
      if (err) console.log(err);
      res.send("Successfully added institution");
    }
  );
});
// Get all from institution table
app.get("/manageInstitution", (req, res) => {
  db.query(`select * from ${database}.${institutiontable};`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/manageInstitution/id=${id}", (req, res) => {
  db.query(`select * from ${database}.${institutiontable} where id = ${id};`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});



app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});
