//演示台图标
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-html-shader';

import assets from "../component/welcome/assets"
import lights from "../component/welcome/lights"
import env from "../component/welcome/env"
import cam from "../component/welcome/cam"

import linkBox from "../component/linkBox"

let size = 3;

let dom = h('a-scene', {
    background: 'color:#CCC'
}, [
    h(assets),
    h(env),
    h(lights),
    h(cam),
    h(linkBox, {
        position: '5 0 -7',
        size: size,
        text: 'show',
        color: '#AFA',
        href: 'p/show.html'
    }),
    h(linkBox, {
        position: '0 0 -7',
        size: size,
        text: 'train',
        color: '#AAF',
        href: 'p/train.html'
    }),
    h(linkBox, {
        position: '-5 0 -7',
        size: size,
        text: 'learn',
        color: '#FAF',
        href: 'p/learn.html'
    }),
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}