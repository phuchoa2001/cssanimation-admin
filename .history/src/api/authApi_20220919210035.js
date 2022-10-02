import axiosClient from './axiosClient';

const authApi = {
  login(data) {
    return axiosClient.post('/admin/login', data);
  },
  logout(data) {
    return axiosClient.post('/admin/logout', data);
  },
  verifyToken(data) {
    return axiosClient.post('/admin/verify_token', data);
  },
};

export default authApi;
