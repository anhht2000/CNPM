import axiosClient from "./axiosClient";

const foodApi = {
  getAllFoods: (pageNumber = 1) => {
    const url = "/foods";
    return axiosClient.get(url, {
      params: {
        pageNumber,
        pageSize: 9,
        // Number(process.env.REACT_APP_LIMIT) ||
      },
    });
  },
};
export default foodApi;
