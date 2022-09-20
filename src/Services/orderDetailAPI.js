import {axiosClient} from "../Utils/axiosClient";

const orderDetailAPI = {
    getOrderDetails: (id) => {
        const path = `/orderDetail/getOrderDetailByOrderId/${id}`;
        return axiosClient.get(path);
    },
    addOrderDetail: (data) => {
        const path = "/orderDetail/addOrderDetail";
        return axiosClient.post(path, data);
    },
    updateOrderDetail: (id,data) => {
        const path = `/orderDetail/updateOrderDetail/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteOrderDetail: (id) => {
        const path = `/orderDetail/deleteOrderDetail/${id}`;
        return axiosClient.delete(path);
    }
}

export default orderDetailAPI;