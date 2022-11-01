import React from 'react';
import { Link } from 'react-router-dom';

export const PopularPosts = ({ post }) => {
  return (
    <div className="bg-gray-400 my-1 hover:bg-gray-800 ">
      <Link
        to={`${post._id}`}
        className="text-base text-white  block cursor-pointer p-2 text-center">
        {post.title}
      </Link>
    </div>
  );
};
