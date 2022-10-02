import axiosClient from './axiosClient';

export const notificationApi = {
    getAll() {
        return axiosClient.get("https://web-production-dccd.up.railway.app/admin/notification?page_size=10");
    },
};
