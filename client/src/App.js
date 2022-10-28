import React, { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main, Posts, Post, EditPost, AddPost, Login, Register } from './pages';
import { getMe } from './redux/slices/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="my-posts" element={<Posts />} />
        <Route path=":id" element={<Post />} />
        <Route path=":id/edit" element={<EditPost />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
