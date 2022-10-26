import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.json({
        message: 'This username already exists',
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      password: hash,
    });
    await newUser.save();
    res.json({ newUser, message: 'Registration  is successful' });
  } catch (error) {
    res.json({
      message: 'Error creating user',
    });
  }
};
export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
export const getMe = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
