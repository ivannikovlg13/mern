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
      <NavLink to="/">
        <span className="flex justify-center items-center  bg-gray-900 rounded-sm text-xs text-white font-bold px-2 py-2 sm:px-6 sm:py-2">
          MERN
        </span>
      </NavLink>

      {isAuth && (
        <ul className="flex gap-3 sm:gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className="text-sm text-gray-500 hover:text-white sm:text-lg"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-posts"
              href="/"
              className="text-sm text-gray-500 hover:text-white sm:text-lg"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              My Posts
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-post"
              href="/"
              className="text-sm text-gray-500 hover:text-white sm:text-lg"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Add Post
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center text-white rounded-sm text-sm sm:text-lg">
        {isAuth ? (
          <button onClick={logoutHandler} className="bg-red-500 px-2 py-1 sm:px-4 sm:py-1">
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
