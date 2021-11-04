import axios from "axios";

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: "https://dispex.org/api/vtest",
        responseType: "json",
    });

    return axiosInstance;
};

export default apiClient;
