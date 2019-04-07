//全部素材文件都放在这里
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

let dom = h('a-assets', {}, [
    h('a-asset-item', {
        id: 'optimerBoldFont',
        src: 'assets/font/optimer_bold.typeface.json'
    }),
    h('a-asset-item', {
        id: 'engine',
        src: 'assets/3d/engine.glb'
    }),
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}