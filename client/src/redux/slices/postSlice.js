import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utlis/axios';

export const createPost = createAsyncThunk('post/createPost', async (params) => {
  try {
    const { data } = await axios.post('/posts', params);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    const { data } = await axios.get('/posts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  posts: [],
  popularPosts: [],
  loading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    //Create Post
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
    },
    [createPost.rejected]: (state) => {
      state.loading = false;
    },
    //Get All Posts
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.popularPosts = action.payload.popularPosts;
    },
    [getAllPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
