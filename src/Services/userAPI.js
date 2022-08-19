import {axiosClient} from "../Utils/axiosClient";

const userAPI = {
    getUserList: () => {
        const path = "/user/getUserList";
        return axiosClient.get(path);
    },
    signUp: (data) => {
        const path = "/user/signUp";
        return axiosClient.post(path, data);
    },
    signIn: (data) => {
        const path = "/user/signIn";
        return axiosClient.post(path, data);
    },
    updateUser: (id,data) => {
        const path = `/user/updateUser/${id}`;
        return axiosClient.patch(path, data);
    },
    deleteUser: (id) => {
        const path = `/user/deleteUser/${id}`;
        return axiosClient.delete(path);
    }
}

export default userAPI;