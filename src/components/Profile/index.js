import React, { Component } from "react";
import Repo from "../Repo";

class Profile extends Component {
  state = {
    username: "daxisda1",
    profile: {},
    repos: []
  };

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(res => res.json())
      .then(profile => this.setState({ profile }));

    fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { profile } = this.state;
    const { repos } = this.state;
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

export default Profile;
