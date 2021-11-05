import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "login";
    return axiosClient.post(url, data);
    // const url = "/foods";
    // return axiosClient.get(url, { params: data });
  },
};

export default authApi;
