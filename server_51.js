// cOMMONjS
// const export = require('export');

// ES6
import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';
// import cors from 'cors';

// db and authenticateUser

import connectDB_51 from './db/connect_51.js';

// routes
import authRoutes_51 from './routes/authRoutes_51.js';

// middleware
import notFoundMiddleware_51 from './middleware/not-found_51.js';
import errorHandlerMiddleware_51 from './middleware/error-hander_51.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // throw new Error('testing for error');
  // res.send('Welcome 邵恩傑 209410751');
  res.json({ msg: 'Welcome -- 邵恩傑 209410751' });
});

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API v1 -- 邵恩傑 209410751' });
});

app.use('/api/v1/auth_51', authRoutes_51);

app.use(notFoundMiddleware_51);
app.use(errorHandlerMiddleware_51);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_51(process.env.MONGO_URL).then(() => {
      console.log('Connect to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
