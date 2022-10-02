import axiosClient from './axiosClient';

const authApi = {
  login(data) {
    return axiosClient.post('/admin/login', data);
  },
  getProfile(data) {
    console.log("data" , data);
    return axiosClient.post('/admin/profile', data);
  },
};

export default authApi;
