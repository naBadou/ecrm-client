import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./router";

// Design dep
import "./design/index.css";
import "./design/App.css";
import "./design/Typography.css";

// Redux dep
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers/_index.js";
import { BrowserRouter } from "react-router-dom";

const initalState = {};

const middlewares = [thunk];

const Storage = createStore(
  Reducers,
  initalState,
  compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={Storage}>
    <React.StrictMode>
      <BrowserRouter>
        {/* <App /> */}
        {/* <Application /> */}
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
