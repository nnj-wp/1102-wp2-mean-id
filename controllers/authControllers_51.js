import User_51 from '../models.js/User_51.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register_51 = async (req, res, next) => {
  console.log('body', req.body);
  const user = await User_51.create(req.body);
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });

  // try {
  //   // res.send('register user -- 邵恩傑, 209410751');
  //   console.log('body', req.body);
  //   const user = await User_51.create(req.body);
  //   const token = user.createJWT();
  //   // console.log('token', token);
  //   res.status(201).json({ user, token });
  // } catch (err) {
  //   // res.status(500).json({ msg: 'Err on registering user' });
  //   next(err);
  // }
};

const login_51 = async (req, res) => {
  console.log('body', req.body);
  // res.json({ msg: 'login user -- 邵恩傑, 209410751' });
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('please provide all values');
  }

  const user = await User_51.findOne({
    email,
  }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  console.log('login user', user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser_51 = async (req, res) => {
  res.send('update user -- 邵恩傑, 209410751');
};

export { register_51, login_51, updateUser_51 };
