import React from "react";

const Repo = props => (
  <div className="col-md-6 mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc}</p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          See repo
        </a>
      </div>
    </div>
  </div>
);

export default Repo;
