import axiosClient from './axiosClient';

export const categoryApi = {
    getAll(params) {
        return axiosClient.get("/css/category", { params });
    },
    getId(id) {
        return axiosClient.get(`/css/category/${id}`);
    },
    add(data) {
        return axiosClient.post("/css/category", data);
    },
    patch({ data, id }) {
        return axiosClient.patch(`/css/category/${id}`, data);
    },
    delete(ids) {
        return axiosClient.delete("/css/category", { data: { ids } });
    },
};
