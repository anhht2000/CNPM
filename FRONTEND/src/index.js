import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "babel-polyfill";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sass/style.scss";

function RouterApp() {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((e, index) => (
          <Route key={index} path={e.path} exact={e.exact}>
            {e.component}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
