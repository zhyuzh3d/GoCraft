import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-html-shader';

import "index.scss";
import assets from "assets"
import env from "components/env"
import cam from "components/cam"
import lights from "components/lights"
import iconBox from "components/iconBox"

ReactDOM.render(
  h('a-scene', {
    background: 'color:#CCC'
  }, [
    h(assets),
    h(env),
    h(cam),
    h(lights),
    h(iconBox, {
      position: '5 0 -7',
      size: 3,
      text: 'show',
      color: '#AFA',
      href:'www.baidu.com'
    }),
    // h(iconBox, {
    //   position: '0 0 -7',
    //   size: 3,
    //   text: 'train',
    //   color: '#AAF'
    // }),
    // h(iconBox, {
    //   position: '-5 0 -7',
    //   size: 3,
    //   text: 'learn',
    //   color: '#FAF'
    // }),
    // h('a-entity',{id:'lala',class:'clickable',position:"0 0 -10"},[
    //   h('a-box',{})
    // ]),
  ]),
  document.getElementById("root")
);

// var boxEl = document.querySelector('#lala');
// boxEl.addEventListener('click', function () {
//   var a=this.getAttribute('clickFn')
//   console.log('>>>>>',this,a('x'));
// });