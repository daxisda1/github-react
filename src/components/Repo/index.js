import React from "react";

const Repo = props => {
  const { name, desc, url, lang } = props;
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" className="btn btn-primary">
            See repo
          </a>
        </div>
        <div class="card-footer text-muted text-center">
          <span>{lang}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
