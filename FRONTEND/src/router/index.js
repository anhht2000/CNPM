import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Login.jsx";

const router = [
  {
    path: "/",
    name: "Home Page",
    exact: true,
    component: HomePage,
    route: [],
  },
  {
    path: "/login",
    name: "Login Page",
    exact: true,
    component: Login,
    route: [],
  },
];
export default router;
