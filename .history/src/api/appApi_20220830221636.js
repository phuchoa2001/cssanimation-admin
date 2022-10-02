import axiosClient from './axiosClient';

export const blogApi = {
  getAll(params) {
    return axiosClient.get('/admin/blogs', { params });
  },
};
