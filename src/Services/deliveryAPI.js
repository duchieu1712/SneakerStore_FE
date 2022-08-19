import {axiosClient} from "../Utils/axiosClient";

const deliveryAPI = {
    getDeliveries: () => {
        const path = "/delivery/getDeliveries";
        return axiosClient.get(path);
    },
    addDelivery: (data) => {
        const path = "/delivery/addDelivery";
        return axiosClient.post(path, data);
    },
    updateDelivery: (id,data) => {
        const path = `/delivery/updateDelivery/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteDelivery: (id) => {
        const path = `/delivery/deleteDelivery/${id}`;
        return axiosClient.delete(path);
    }
}

export default deliveryAPI;