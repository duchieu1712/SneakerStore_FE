import {axiosClient} from "../Utils/axiosClient";

const productAPI = {
    getProducts: () => {
        const path = "/product/getProducts";
        return axiosClient.get(path);
    },
    filterProducts: (data) => {
        const path = `/product/getProducts/${data}`;
        return axiosClient.get(path);
    },
    addProduct: (data) => {
        const path = "/product/addProduct";
        return axiosClient.post(path, data);
    },
    updateProduct: (id,data) => {
        const path = `/product/updateProduct/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteProduct: (id) => {
        const path = `/product/deleteProduct/${id}`;
        return axiosClient.delete(path);
    }
}

export default productAPI;