import axiosClient from './axiosClient';

export const IconApi = {
    getAll(params) {
        return axiosClient.get("/admin/icon", { params });
    },
    add(form) {
        return axiosClient.post("/admin/icon", form);
    },
    delete(ids) {
        return axiosClient.delete("/admin/icon", { data: { ids } });
    },
};
