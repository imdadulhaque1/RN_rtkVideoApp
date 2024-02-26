import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {videoInitialStateInterface} from '@src/interfaces/initialStateInterface';
import {getVideo} from './videoAPI';

const initialState: videoInitialStateInterface = {
  video: {},
  isLoading: false,
  isError: false,
  error: '',
};

// Ccreating AsyncThunk
export const fetchVideo = createAsyncThunk(
  'video/fetchVideo',
  async (id: number) => {
    const video = await getVideo(id);
    return video;
  },
);

// Creating a videos Slice
const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVideo.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
