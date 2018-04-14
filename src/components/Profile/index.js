import React, { Component } from "react";
import { connect } from "react-redux";
import Repo from "../Repo";

class Profile extends Component {
  render() {
    const { profile } = this.props;
    const { repos } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={profile.avatar_url} alt="" />
            <h2>{profile.name}</h2>
            <p className="text-muted">@{profile.login}</p>
            <p>{profile.bio}</p>
          </div>
          <div className="col-md-8">
            <h1>My Repos</h1>
            <div className="row">
              {repos.map(repo => (
                <Repo
                  key={repo.id}
                  name={repo.name}
                  desc={repo.description}
                  url={repo.html_url}
                  lang={repo.language}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    profile: state.profile,
    repos: state.repos
  };
};

export default connect(mapStateToProps)(Profile);
