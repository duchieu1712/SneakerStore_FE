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
    deleteCategory: (data) => {
        const path = '/category/deleteCategory';
        return axiosClient.post(path,data);
    }
}

export default categoryAPI;