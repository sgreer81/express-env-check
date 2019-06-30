const express = require('express');
const expressEnvCheck = require('express-env-check');

const app = express();
const port = 3000;

const customErrorLog = (...args) => {
  console.error('custom error');
  console.error(...args);
};

expressEnvCheck(
  ['DB_HOST', 'DB_USER', 'DB_PASSWORD'],
  ['DB_PASSWORD'],
  console.log,
  customErrorLog
);

// Add middleware here...

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
