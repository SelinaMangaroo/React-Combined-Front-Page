import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./FrontPage";

ReactDOM.render(
  <React.StrictMode>
    <FrontPage
      mode="grid"
      endpoint="http://metabolic2.whirl-i-gig.com:8085/Front/getData/download/1"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
