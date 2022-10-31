import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import Moment from 'react-moment';

export const PostItem = ({ post }) => {
  if (!post) {
    return <div>Posts do not exist</div>;
  }
  return (
    <Link to={`/${post._id}`}>
      <div className="flex flex-col basis-1/4 flex-grow">
        <div className={post.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
          {post.imgUrl && (
            <img
              className="object-cover w-full"
              src={`http://localhost:3002/${post.imgUrl}`}
              alt={post.imgUrl.name}
            />
          )}
        </div>
        <div className="flex justify-between  items-center pt-2">
          <div className="text-lg text-white opacity-50">{post.username}</div>
          <div className="text-base text-white opacity-50">
            <Moment date={post.createdAt} format="D MMM YYYY" />
          </div>
        </div>
        <h1 className="text-white text-xl">{post.title}</h1>
        <p className="text-lg text-white opacity-60 pt-4">{post.text}</p>
        <div className="flex gap-3 items-center mt-2">
          <button className="flex items-center justify-center gap-2 text-sm text-white opacity-50">
            <AiFillEye /> <span>{post.views}</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-sm text-white opacity-50">
            <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};
