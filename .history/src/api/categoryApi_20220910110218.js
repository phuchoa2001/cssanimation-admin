import axiosClient from './axiosClient';

export const CategoryApi = {
    getAll(params) {
        return axiosClient.get("/admin/category", { params });
    },
    getId(id) {
        return axiosClient.get(`/admin/category${id}`);
    },
    add(data) {
        return axiosClient.post("/admin/category", data);
    },
    patch(data, id) {
        return axiosClient.patch(`/admin/category/${id}`, data);
    },
    delete(ids) {
        return axiosClient.delete("/admin/category", { data: { ids } });
    },
};
