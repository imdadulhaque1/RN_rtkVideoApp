import {configureStore} from '@reduxjs/toolkit';
import videosReducer from '@rtk/features/videos/VideosSlice';
import tagsReducer from '@rtk/features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
  },
});
