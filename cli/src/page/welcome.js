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
import linkBar from "../component/linBar"

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
        href: 'p/show.html',
        label:'表演台'
    }),
    h(linkBox, {
        position: '0 0 -7',
        size: size,
        text: 'train',
        color: '#AAF',
        href: 'p/train.html',
        label:'训练场',
    }),
    h(linkBox, {
        position: '-5 0 -7',
        size: size,
        text: 'learn',
        color: '#FAF',
        href: 'p/learn.html',
        label:'学习营'
    }),
    h(linkBar, {
        position: '-0.6 -1.1 -2',
        color: '#6F6',
        href: 'p/login.html',
        label:'登录注册'
    }),
    h(linkBar, {
        position: '0.6 -1.1 -2',
        color: '#66F',
        href: 'p/about.html',
        label:'探索故事'
    }),
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}