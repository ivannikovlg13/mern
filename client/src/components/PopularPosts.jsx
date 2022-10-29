import React from 'react';

export const PopularPosts = ({ post }) => {
  return (
    <div className="bg-gray-400 my-1">
      <div className="text-base text-gray-700 hover:bg-gray-800 hover:text-white cursor-pointer p-2">
        {post.title}
      </div>
    </div>
  );
};
