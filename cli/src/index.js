import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

import "index.scss";

let Box=()=>{
  return h('a-box',{color:'red',position:'0 0 -4'})
}

ReactDOM.render(
  h('a-scene',{background:'color:#CCC'},[
    h(Box)
  ]),
  document.getElementById("root")
);