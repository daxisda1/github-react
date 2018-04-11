import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Search, Mine } from "./screens";

const Index = ({ store }) => (
  <Provider store={null}>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  </Provider>
);
render(<Index />, document.getElementById("root"));
