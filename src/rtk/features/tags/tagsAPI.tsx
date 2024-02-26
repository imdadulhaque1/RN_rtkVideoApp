import axiosInstance from '@axios/axiosInstances';

export const getTags = async () => {
  const response = await axiosInstance.get('/tags');
  return response.data;
};
