import {axiosClient} from "../Utils/axiosClient";

const sizeAPI = {
    getSizes: () => {
        const path = "/size/getSizes";
        return axiosClient.get(path);
    },
    addSize: (data) => {
        const path = "/size/addSize";
        return axiosClient.post(path, data);
    },
    updateSize: (id,data) => {
        const path = `/size/updateSize/${id}`;
        return axiosClient.put(path, data);
    },
    deleteSize: (data) => {
        const path = '/size/deleteSize';
        return axiosClient.post(path,data);
    }
}

export default sizeAPI;