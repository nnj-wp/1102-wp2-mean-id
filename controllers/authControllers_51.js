import User_51 from '../models.js/User_51.js';

const register_51 = async (req, res, next) => {
  try {
    // res.send('register user -- 邵恩傑, 209410751');
    console.log('body', req.body);
    const user = await User_51.create(req.body);
    const token = user.createJWT();
    // console.log('token', token);
    res.status(201).json({ user, token });
  } catch (err) {
    // res.status(500).json({ msg: 'Err on registering user' });
    next(err);
  }
};

const login_51 = async (req, res) => {
  res.send('login user -- 邵恩傑, 209410751');
};

const updateUser_51 = async (req, res) => {
  res.send('update user -- 邵恩傑, 209410751');
};

export { register_51, login_51, updateUser_51 };
