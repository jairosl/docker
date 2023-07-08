const express = require('express');

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Jairo')`;
connection.query(sql);
connection.end();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ docker: "Hello, world!" });
})

app.listen(port, () => {
  console.log("listening on port " + port);
});