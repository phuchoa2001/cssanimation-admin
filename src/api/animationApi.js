import axiosClient from './axiosClient';

export const animationApi = {
    getAll(params) {
        return axiosClient.get("/css/app", { params });
    },
    getId(id) {
        return axiosClient.get(`/css/app/${id}`);
    },
    add(data) {
        console.log("newData" , data)
        return axiosClient.post("/css/app", data);
    },
    patch({ data, id }) {
        return axiosClient.patch(`/css/app/${id}`, data);
    },
    delete(ids) {
        return axiosClient.delete("/css/app", { data: { ids } });
    },
};
