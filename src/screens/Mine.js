import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";

const Mine = () => (
  <div>
    <Header title="Github App" />
    <main className="container mt-5 pt-5">
      <Profile />
    </main>
  </div>
);

export default Mine;
