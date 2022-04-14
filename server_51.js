// cOMMONjS
// const export = require('export');

// ES6
import express from 'express';
import connectDB_51 from './db/connect_51.js';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.get('/', (req, res) => {
  res.send('Welcome 邵恩傑 209410751');
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_51(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Connect to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
