const express = require('express');
const app = express();
const port = 443;

require('dotenv').config();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});