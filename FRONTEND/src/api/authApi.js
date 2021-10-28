import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/foods";
    // return axiosClient.get(url, data);
    return axiosClient.get(url);
  },
};

export default authApi;
