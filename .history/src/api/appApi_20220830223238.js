import axiosClient from './axiosClient';

export const appApi = {
    getAll(params) {
        console.log("params", params);
        return axiosClient.get("/admin/image", { params });
    },
};
