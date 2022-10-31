import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopularPosts } from '../components/PopularPosts';
import { PostItem } from '../components/PostItem';
import { getAllPosts } from '../redux/slices/postSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <div className="text-xl text-center text-white py-10">Posts do not exist</div>;
  }

  return (
    <div className="max-w-[900px] mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5">
          {posts?.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
        <div className="basis-1/5">
          <h1 className="text-lg text-white">Popular</h1>
          {popularPosts?.map((post, index) => (
            <PopularPosts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
