import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import axios from '../utlis/axios';
import { updatePost } from '../redux/slices/postSlice';

export const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [oldImage, setOldImage] = useState('');
  const [newImage, setNewImage] = useState('');

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setTitle(data.title);
    setText(data.text);
    setOldImage(data.imgUrl);
  }, [params.id]);

  const submitHandler = () => {
    try {
      const updatedPost = new FormData();
      updatedPost.append('title', title);
      updatedPost.append('text', text);
      updatedPost.append('id', params.id);
      updatedPost.append('image', newImage);
      dispatch(updatePost(updatedPost));
      navigate('/my-posts');
    } catch (error) {
      console.log(error);
    }
  };

  const clearHandler = () => {
    setTitle('');
    setText('');
  };

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-lg mt-2 flex justify-center items-center  border border-dotted cursor-pointer">
        Upload image
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            setNewImage(e.target.files[0]);
            setOldImage('');
          }}
        />
      </label>
      <div className="flex object-cover py-2">
        {oldImage && <img src={`http://localhost:3002/${oldImage}`} alt={oldImage.name} />}
        {newImage && <img src={URL.createObjectURL(newImage)} alt={newImage.name} />}
      </div>
      <label className="text-lg text-white opacity-75">
        Title post:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-lg outline-none placeholder:text-gray-700"
          placeholder="Title"
        />
      </label>
      <label className="text-lg text-white opacity-75 mt-6">
        Text post:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 resize-none h-40 text-lg outline-none placeholder:text-gray-700"
          placeholder="Text"
        />
      </label>
      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          type="button"
          onClick={submitHandler}
          className="flex justify-center items-center bg-green-400 text-lg text-white rounded-sm py-2 px-4">
          Update
        </button>
        <button
          onClick={clearHandler}
          className="flex justify-center items-center bg-red-500 text-lg text-white rounded-sm py-2 px-4">
          Clear Post
        </button>
      </div>
    </form>
  );
};
