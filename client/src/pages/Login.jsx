import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-1/4 h-60 mx-auto mt-40">
      <h1 className="text-xl text-white text-center">Authorization</h1>
      <label className="text-lg text-gray-400 ">
        Username:
        <input
          type="text"
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"></input>
      </label>
      <label className="text-lg text-gray-400 ">
        Password:
        <input
          type="password"
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"></input>
      </label>
      <div className="flex gap-8 justify-center mt-6">
        <button
          type="submit"
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
