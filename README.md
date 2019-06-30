# Express Env Check

A simple package to check that required environment variables are set before starting server.

## Usage

Add the following as early as possible in your main express start file (`app.js` or `index.js`).

```js
const expressEnvCheck = require('express-env-check');

expressEnvCheck(
  ['DB_PASSWORD'], // A list of required environment variables
  ['DB_PASSWORD'] // A list of sensitive environment variables that should not have their values logged
);
```

The second argument is a list of sensitive environment variables that should not have their values logged. This is recommended for database passwords, api keys or other secrets.

See [example.js](example.js) for more detail.

## Custom info / error handlers

Optionally, a custom info and error handler can be passed as function arguments. This can be useful if your app is using a custom logging service, or writing logs to a log file rather than the console. Below is an example.

```js
const errorLog = (...args) => {
  console.error('custom error');
  console.error(...args);
};

checkEnvVars(['DB_PASSWORD'], ['DB_PASSWORD'], console.log, errorLog);
```
