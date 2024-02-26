import axiosInstance from '@axios/axiosInstances';

export const getVideo = async (id: number) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};
