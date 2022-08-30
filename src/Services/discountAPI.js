import {axiosClient} from "../Utils/axiosClient";

const discountAPI = {
    getDiscounts: () => {
        const path = "/discount/getDiscounts";
        return axiosClient.get(path);
    },
    addDiscount: (data) => {
        const path = "/discount/addDiscount";
        return axiosClient.post(path, data);
    },
    updateDiscount: (id,data) => {
        const path = `/discount/updateDiscount/${id}`;
        return axiosClient.put(path, data);
    },
    deleteDiscount: (data) => {
        const path = `/discount/deleteDiscount`;
        return axiosClient.post(path,data);
    }
}

export default discountAPI;