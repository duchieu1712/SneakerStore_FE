import {axiosClient} from "../Utils/axiosClient";

const categoryAPI = {
    getCategories: () => {
        const path = "/category/getCategories";
        return axiosClient.get(path);
    },
    addCategory: (data) => {
        const path = "/category/addCategory";
        return axiosClient.post(path, data);
    },
    updateCategory: (id,data) => {
        const path = `/category/updateCategory/${id}`;
        return axiosClient.put(path, data);
    },
    deleteCategory: (id) => {
        const path = `/category/deleteCategory/${id}`;
        return axiosClient.delete(path);
    }
}

export default categoryAPI;