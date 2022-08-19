import {axiosClient} from "../Utils/axiosClient";

const orderAPI = {
    getOrders: () => {
        const path = "/order/getOrders";
        return axiosClient.get(path);
    },
    addOrder: (data) => {
        const path = "/order/addOrder";
        return axiosClient.post(path, data);
    },
    updateOrder: (id,data) => {
        const path = `/order/updateOrder/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteOrder: (id) => {
        const path = `/order/deleteOrder/${id}`;
        return axiosClient.delete(path);
    }
}

export default orderAPI;