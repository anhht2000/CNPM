import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/user/login";
    return axiosClient.get(url, { params: { email: data.email, password: data.password } });
    // const dt = new FormData();
    // dt.append("email", data.email);
    // dt.append("password", data.password);
    // return axiosClient.post(url, data);
  },
  signUp: (data) => {
    const url = "/user/signup";
    const dt = {};
    dt.email = data.email;
    dt.phone = data.phone;
    dt.firstName = data.firstname;
    dt.lastName = data.lastname;
    dt.passWord = data.password;
    dt.address = data.address;

    return axiosClient.post(url, JSON.stringify(dt));
  },
};

export default authApi;
