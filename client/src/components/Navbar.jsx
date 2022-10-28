import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { checkIsAuth, logout } from '../redux/slices/authSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(checkIsAuth);

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    toast('You are logout');
  };

  const activeStyle = {
    color: 'white',
  };
  return (
    <div className="flex justify-between items-center py-4 ">
      <span className="flex justify-center items-center  bg-gray-400 rounded-sm text-xs text-white font-bold px-6 py-2">
        MERN
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className="text-lg text-gray-500 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-posts"
              href="/"
              className="text-lg text-gray-500 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              My Posts
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-post"
              href="/"
              className="text-lg text-gray-500 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Add Post
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center text-white rounded-sm">
        {isAuth ? (
          <button onClick={logoutHandler} className="bg-red-500 px-5 py-1">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-green-500 px-5 py-1">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
