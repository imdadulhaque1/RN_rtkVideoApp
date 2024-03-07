import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getRelatedVideos} from './RelatedVideosAPI';
import {relatedVideoInitialStateInterface} from '@src/interfaces/initialStateInterface';

const initialState: relatedVideoInitialStateInterface = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: '',
};

// Ccreating AsyncThunk
export const fetchRelatedVideos = createAsyncThunk(
  'relatedVideos/fetchRelatedVideos',
  async ({tags, id}) => {
    const relatedVideos = await getRelatedVideos({tags, id});
    return relatedVideos;
  },
);

// Creating a realtedVideos Slice
const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRelatedVideos.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
