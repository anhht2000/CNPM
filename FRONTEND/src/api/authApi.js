import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    console.log(data);
    var body = new FormData();
    body.append('email', data.email);
    body.append('password', data.password);
    const url = "/user/login";
    return axiosClient.post(url, body);
    // const url = "/foods";
    // return axiosClient.get(url, { params: data });
  },
};

export default authApi;
