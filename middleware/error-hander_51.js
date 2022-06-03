import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware_51 = (err, req, res, next) => {
  console.log('error', err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json;
};

export default errorHandlerMiddleware_51;
