import React from "react";
import { Redirect } from "react-router-dom";

const username = "daxisda1";

const Mine = () => <Redirect to={`/user/${username}`} />;

export default Mine;
