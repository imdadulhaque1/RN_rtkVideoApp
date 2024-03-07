import {configureStore} from '@reduxjs/toolkit';
import videosReducer from '@rtk/features/videos/VideosSlice';
import tagsReducer from '@rtk/features/tags/tagsSlice';
import videoReducer from '@rtk/features/video/videoSlice';
import relatedVideosReducer from '@rtk/features/relatedVideo/RelatedVideosSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
  },
});
