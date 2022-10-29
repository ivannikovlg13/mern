import React from 'react';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import Moment from 'react-moment';

export const PostItem = ({ username, createdAt, title, text, views, comments, imgUrl }) => {
  return (
    <div className="flex flex-col basis-1/4 flex-grow">
      <div className={imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
        {imgUrl && (
          <img
            className="object-cover w-full"
            src={`http://localhost:3002/${imgUrl}`}
            alt="image"
          />
        )}
      </div>
      <div className="flex justify-between  items-center pt-2">
        <div className="text-lg text-white opacity-50">{username}</div>
        <div className="text-base text-white opacity-50">
          <Moment date={createdAt} format="D MMM YYYY" />
        </div>
      </div>
      <h1 className="text-white text-xl">{title}</h1>
      <p className="text-lg text-white opacity-60 pt-4">{text}</p>
      <div className="flex gap-3 items-center mt-2">
        <button className="flex items-center justify-center gap-2 text-sm text-white opacity-50">
          <AiFillEye /> <span>{views}</span>
        </button>
        <button className="flex items-center justify-center gap-2 text-sm text-white opacity-50">
          <AiOutlineMessage /> <span>{comments?.length || 0}</span>
        </button>
      </div>
    </div>
  );
};
