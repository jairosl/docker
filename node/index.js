const express = require('express');

const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ docker: "Hello, world!" });
})

app.listen(port, () => {
  console.log("listening on port " + port);
});