import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Results extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.results.items.map(user => (
          <div key={user.id} className="col-md-6 mb-4">
            <Link
              className="border rounded p-4 d-block"
              to={`/user/${user.login}`}
            >
              <div className="row">
                <div className="col-md-3">
                  <img
                    className="img-fluid"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                </div>
                <div className="col-md-9">
                  <h3>{user.login}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default connect(mapStateToProps)(Results);
