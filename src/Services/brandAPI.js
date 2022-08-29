import {axiosClient} from "../Utils/axiosClient";

const brandAPI = {
    getBrands: () => {
        const path = "/brand/getBrands";
        return axiosClient.get(path);
    },
    addBrand: (form_data) => {
        const path = "/brand/addBrand";
        return axiosClient.post(path, form_data);
    },
    updateBrand: (id,form_data) => {
        const path = `/brand/updateBrand/${id}`;
        return axiosClient.post(path, form_data);
    },
    deleteBrand: (data) => {
        const path = `/brand/deleteBrand`;
        return axiosClient.post(path,data);
    }
}

export default brandAPI;