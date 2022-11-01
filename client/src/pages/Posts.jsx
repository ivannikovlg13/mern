import React, { useState, useEffect, useCallback } from 'react';
import { PostItem } from '../components/PostItem';
import axios from '../utlis/axios';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchMyPosts = useCallback(async () => {
    try {
      const { data } = await axios.get('posts/user/me');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchMyPosts();
  }, [fetchMyPosts]);
  if (!posts.length) {
    return <div className="text-xl text-center text-white py-10">You don't have posts</div>;
  }
  return (
    <div className="w-3/4 mx-auto py-10 flex flex-col gap-10">
      {posts?.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};
