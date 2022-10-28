import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Main, Posts, Post, EditPost, AddPost, Login, Register } from './pages';

function App() {
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
    </Layout>
  );
}

export default App;
