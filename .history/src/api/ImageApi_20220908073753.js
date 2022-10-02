import axiosClient from './axiosClient';

export const ImageApi = {
    getAll(params) {    
        return axiosClient.get("/admin/image", { params });
    },
};
