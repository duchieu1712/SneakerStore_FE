import {axiosClient} from "../Utils/axiosClient";

const productSizeAPI = {
    getProductSizeList: () => {
        const path = "/productSize/getProductSizeList";
        return axiosClient.get(path);
    },
    addProductSize: (data) => {
        const path = "/productSize/addProductSize";
        return axiosClient.post(path, data);
    },
    updateProductSize: (id,data) => {
        const path = `/productSize/updateProductSize/${id}`;
        return axiosClient.put(path, data);
    },
    deleteProductSize: (data) => {
        const path = '/productSize/deleteProductSize';
        return axiosClient.post(path,data);
    }
}

export default productSizeAPI;