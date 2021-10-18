import "babel-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import router from "./router";
import "./sass/style.scss";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
}

function RouterApp() {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
