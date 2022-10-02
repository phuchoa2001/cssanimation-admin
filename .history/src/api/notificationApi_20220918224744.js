import axiosClient from './axiosClient';

export const notificationApi = {
    getAll() {
        return axiosClient.get("/admin/notification?page_size=10");
    },
};
