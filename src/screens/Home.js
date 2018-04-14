import React from "react";
import Header from "../components/Header";

const Home = () => (
  <div>
    <Header />
    <main className="container mt-5 pt-5">
      <div className="starter-template">
        <h1>Home</h1>
        <p className="lead">
          Use this document as a way to quickly start any new project.<br /> All
          you get is this text and a mostly barebones HTML document.
        </p>
      </div>
    </main>
  </div>
);

export default Home;
