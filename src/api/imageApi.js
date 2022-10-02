import axiosClient from './axiosClient';

export const ImageApi = {
    getAll(params) {
        return axiosClient.get("/admin/image", { params });
    },
    add(form) {
        return axiosClient.post("/admin/image", form);
    },
    delete(ids) {
        return axiosClient.delete("/admin/image", { data: { ids } });
    },
};
