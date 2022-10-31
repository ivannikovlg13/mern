import React, { useCallback, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import Moment from 'react-moment';
import { toast } from 'react-toastify';

import axios from '../utlis/axios';
import { removePost } from '../redux/slices/postSlice';

export const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const deletePostHandler = () => {
    try {
      dispatch(removePost(params.id));
      toast('Post has been deleted');
      navigate('/my-posts');
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <div className="text-xl text-center text-white">Loading...</div>;
  }

  return (
    <div>
      <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
        <Link className="flex" to="/">
          Back{' '}
        </Link>
      </button>
      <div className="flex gap-10 py-8">
        <div className="w-2/3">
          <div className="flex flex-col basis-1/4 flex-grow">
            <div className={post?.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
              {post?.imgUrl && (
                <img
                  className="object-cover w-full"
                  src={`http://localhost:3002/${post?.imgUrl}`}
                  alt={post.imgUrl.name}
                />
              )}
            </div>
            <div className="flex gap-3 items-center mt-2 justify-between">
              <div className="flex gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 text-lg text-white opacity-50">
                  <AiFillEye /> <span>{post.views}</span>
                </button>
                <button className="flex items-center justify-center gap-2 text-lg text-white opacity-50">
                  <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                </button>
              </div>
              {user?._id === post.author && (
                <div className="flex gap-3 mt-4">
                  <button className="flex items-center justify-center gap-2 text-lg text-white opacity-50 hover:scale-110">
                    <Link to={`/${params.id}/edit`}>
                      <AiTwotoneEdit />
                    </Link>
                  </button>
                  <button
                    onClick={deletePostHandler}
                    className="flex items-center justify-center gap-2 text-lg text-white opacity-50 hover:scale-110">
                    <AiFillDelete />
                  </button>
                </div>
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
          </div>
        </div>
        <div className="w-1/3">Comments</div>
      </div>
    </div>
  );
};
