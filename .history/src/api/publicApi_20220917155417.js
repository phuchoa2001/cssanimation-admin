import axiosClient from './axiosClient';

export const publicApi = {
    getTotal(params) {
        return axiosClient.get("/public/total");
    },
};
