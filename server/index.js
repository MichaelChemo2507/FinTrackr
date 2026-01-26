require('./utils/globals.utils');

const serverConfig = require('./config/server.config')
const express = require('express');
const app = express();
const port = 2507;


app.use(serverConfig.corsConfig);
app.use(express.json());
require('dotenv').config();

app.use('/',require('./routers/router.routers'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});