import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Profile from "../components/Profile";
import * as actionTypes from "../actions";

class User extends Component {
  componentDidMount() {
    const username = this.props.match.params.username;

    this.props.fetchProfile(`https://api.github.com/users/${username}`);

    this.props.fetchRepos(`https://api.github.com/users/${username}/repos`);
  }
  render() {
    return (
      <div>
        <Header />
        <main className="container mt-5 pt-5">
          <Profile />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    repos: state.repos,
    hasErrored: state.profileHasErrored,
    isLoading: state.profileIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: url => dispatch(actionTypes.profileFetchData(url)),
    fetchRepos: url => dispatch(actionTypes.reposFetchData(url))
    // updateUsername: username =>
    //   dispatch({
    //     action: actionTypes.UPDATE_USERNAME,
    //     payload: "dionimercado"
    //   }),
    // updateProfile: () =>
    //   dispatch({ action: actionTypes.UPDATE_PROFILE, payload: "dionimercado" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
