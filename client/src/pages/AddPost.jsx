import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/slices/postSlice';

export const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('text', text);
      data.append('image', image);
      dispatch(createPost(data));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const clearHandler = () => {
    setText('');
    setTitle('');
    setImage('');
  };
  return (
    <form className="sm:w-1/3 w-3/4 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-lg mt-2 flex justify-center items-center  border border-dotted cursor-pointer">
        Upload image
        <input type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <div className="flex object-cover py-2">
        {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
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
          className="flex justify-center items-center bg-green-400 text-lg text-white rounded-sm py-1 px-2 sm:py-2 sm:px-4">
          Add Post
        </button>
        <button
          onClick={clearHandler}
          className="flex justify-center items-center bg-red-500 text-lg text-white rounded-sm  py-1 px-2 sm:py-2 sm:px-4">
          Clear Post
        </button>
      </div>
    </form>
  );
};
