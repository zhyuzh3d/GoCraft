import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"

import "index.scss";
import welcome from "page/welcome"

ReactDOM.render(
  h(welcome),
  document.getElementById("root")
);