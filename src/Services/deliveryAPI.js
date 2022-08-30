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
        return axiosClient.put(path, data);
    },
    deleteDelivery: (data) => {
        const path = `/delivery/deleteDelivery`;
        return axiosClient.post(path,data);
    }
}

export default deliveryAPI;