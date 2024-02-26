import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getVideos} from './videosAPI';
import {initialStateInterface} from '@src/interfaces/initialStateInterface';

const initialState: initialStateInterface = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
};

// Ccreating AsyncThunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const videos = await getVideos();
  return videos;
});

// Creating a videos Slice
const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVideos.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
