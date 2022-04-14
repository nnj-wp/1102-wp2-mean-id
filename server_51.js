// cOMMONjS
// const export = require('export');

// ES6
import express from 'express';
import { allowedNodeEnvironmentFlags } from 'process';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome 邵恩傑 209410751');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
