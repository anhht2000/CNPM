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
];
export default router;
