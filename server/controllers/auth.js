import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.json({
        message: 'This user does not exist',
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: 'Login or password is not correct',
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    );
    res.json({
      token,
      user,
      message: 'You login in system.',
    });
  } catch (error) {
    res.json({
      message: 'Authorization error',
    });
  }
};
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.json({
        message: 'This user does not exist',
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    );
    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: 'No access',
    });
  }
};
