import axiosClient from './axiosClient';

const authApi = {
  login(data) {
    return axiosClient.post('/auth/login_admin', data);
  },
  verifyToken(data) {
    return axiosClient.post('/auth/verify_token', data);
  },
};

export default authApi;
