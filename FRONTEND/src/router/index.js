import AddToCart from "../pages/AddToCart.jsx";
import BuySuccess from "../pages/BuySuccess.jsx";
import Detailbill from "../pages/DetailBill.jsx";
import { HistoryOrder } from "../pages/HistoryBill.jsx";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Login.jsx";
import MenuPage from "../pages/MenuPage.jsx";
import Signup from "../pages/Signup.jsx";

const router = [
  {
    path: "/",
    name: "Home Page",
    exact: true,
    component: HomePage,
    routes: [],
  },
  {
    path: "/menu",
    name: "Menu Page",
    exact: true,
    component: MenuPage,
    routes: [],
  },
  {
    // path: "/login/:path",
    path: "/login",
    name: "Login Page",
    exact: false,
    component: Login,
    routes: [
      {
        path: "/login/test",
        component: HomePage,
      },
    ],
  },
  {
    path: "/signup",
    name: "Signup Page",
    exact: true,
    component: Signup,
    routes: [],
  },
  {
    path: "/add-to-cart",
    name: "Add To Cart Page",
    exact: true,
    component: AddToCart,
    routes: [],
  },
  {
    path: "/add-to-cart-success",
    name: "Success Page",
    exact: true,
    component: BuySuccess,
    routes: [],
  },
  {
    path: "/history-receipt",
    name: "History bill Page",
    exact: true,
    component: HistoryOrder,
    routes: [],
  },
  {
    path: "/detail-receipt",
    name: "History bill Page",
    exact: true,
    component: Detailbill,
    routes: [],
  },
];
export default router;
