import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {initialStateInterface} from '@src/interfaces/initialStateInterface';
import {getTags} from './tagsAPI';

const initialState: initialStateInterface = {
  tags: [],
  isLoading: false,
  isError: false,
  error: '',
  videos: [],
};

// Ccreating AsyncThunk
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
  const tags = await getTags();
  return tags;
});

// Creating a videos Slice
const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTags.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
