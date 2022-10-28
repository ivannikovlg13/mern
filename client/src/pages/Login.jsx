import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { checkIsAuth, loginUser } from '../redux/slices/authSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate('/');
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(
        loginUser({
          username,
          password,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-1/4 h-60 mx-auto mt-40">
      <h1 className="text-xl text-white text-center">Authorization</h1>
      <label className="text-lg text-gray-400 ">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"></input>
      </label>
      <label className="text-lg text-gray-400 ">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"></input>
      </label>
      <div className="flex gap-8 justify-center mt-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-lg bg-green-400 text-white rounded-sm py-1 px-4">
          Login
        </button>
        <Link
          to="/register"
          className="flex justify-center items-center text-lg text-white rounded-sm">
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};
