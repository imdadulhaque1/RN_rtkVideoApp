import axiosInstance from '@axios/axiosInstances';

export const getVideos = async () => {
  const response = await axiosInstance.get('/videos');
  return response.data;
};
