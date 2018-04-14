import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Search, Mine, User } from "./screens";

import reducer from "./reducers";

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/search" component={Search} />
        <Route path="/user/:username" component={User} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
