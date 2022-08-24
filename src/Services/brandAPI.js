import {axiosClient} from "../Utils/axiosClient";

const brandAPI = {
    getBrands: () => {
        const path = "/brand/getBrands";
        return axiosClient.get(path);
    },
    addBrand: (data) => {
        const path = "/brand/addBrand";
        return axiosClient.post(path, data);
    },
    updateBrand: (id,data) => {
        const path = `/brand/updateBrand/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteBrand: (id) => {
        const path = `/brand/deleteBrand/${id}`;
        return axiosClient.delete(path);
    }
}

export default brandAPI;