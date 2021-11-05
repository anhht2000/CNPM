import axiosClient from "./axiosClient";

const foodApi = {
  getAllFoods: ({ pageNumber, category, search }) => {
    const url = "/foods";

    return axiosClient.get(url, {
      params: {
        pageNumber: pageNumber || 1,
        pageSize: 9,
        search: search || undefined,
        category: category || undefined,
      },
    });
  },
  getCategory: () => {
    const url = "/foodcategory";
    return axiosClient.get(url);
  },
};
export default foodApi;
