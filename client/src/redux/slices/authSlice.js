import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  token: null,
  isLoading: false,
  status: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
