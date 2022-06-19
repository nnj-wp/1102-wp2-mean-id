import express from 'express';
const router = express.Router();

import {
  register_51,
  login_51,
  updateUser_51,
} from '../controllers/authControllers_51.js';

import authenticateUser_51 from '../middleware/auth_51.js';

router.route('/register_51').post(register_51);
router.route('/login_51').post(login_51);
router.route('/updateUser_51').patch(authenticateUser_51, updateUser_51);

export default router;
