import axiosClient from './axiosClient';

export const appApi = {
    getAll(params) {
        return axiosClient.get("/admin/app", { params });
    },
    getId(id) {
        return axiosClient.get(`/admin/app/${id}`);
    },
    add(data) {
        console.log("newData" , newData)
        return axiosClient.post("/admin/app", data);
    },
    patch({ data, id }) {
        return axiosClient.patch(`/admin/app/${id}`, data);
    },
    delete(ids) {
        return axiosClient.delete("/admin/app", { data: { ids } });
    },
};
