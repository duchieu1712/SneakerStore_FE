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
        return axiosClient.patch(path, data);
    },
    deleteDiscount: (id) => {
        const path = `/discount/deleteDiscount/${id}`;
        return axiosClient.delete(path);
    }
}

export default discountAPI;