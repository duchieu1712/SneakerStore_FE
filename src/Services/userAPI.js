import {axiosClient} from "../Utils/axiosClient";

const userAPI = {
    getUserById: (id) => {
        const path = `/user/getUserById/${id}`;
        return axiosClient.get(path);
    },
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
        return axiosClient.put(path, data);
    },
    deleteUser: (data) => {
        const path = `/user/deleteUser`;
        return axiosClient.post(path, data);
    }
}

export default userAPI;