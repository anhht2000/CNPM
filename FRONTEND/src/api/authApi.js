import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/login";
    return axiosClient.get(url, { params: { email: data.email, password: data.password } });
  },
};

export default authApi;
