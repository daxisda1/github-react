import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../actions";

class Searchform extends Component {
  componentWillReceiveProps(nextProps) {
    // will be true
    // const locationChanged = nextProps.location !== this.props.location;

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged =
      nextProps.history.location !== this.props.history.location;
    console.log(this.props);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("Searchform.js", this.props);
    // const username = this.props.match.params.username;
    // console.log(username);

    this.props.fetchResults(
      `https://api.github.com/search/users?q=${this.props.searchVal}`
    );
  };

  render() {
    // const { fireRedirect } = this.props
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            value={this.props.searchVal}
            onChange={this.props.onChange}
            aria-label="Search"
          />
        </form>
        {/* {!this.props.isLoading ? <Redirect to="/search" /> : ""} */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchVal: state.search,
    searchResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e =>
      dispatch({ type: actionTypes.SEARCH_GITHUB, value: e.target.value }),
    fetchResults: url => dispatch(actionTypes.resultsFetchData(url))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Searchform)
);
