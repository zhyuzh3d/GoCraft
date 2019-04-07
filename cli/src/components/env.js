//背景模型
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

let dom = h('a-entity', {
    position: "0 0 -3"
}, [
    h('a-gltf-model', {
        src: "#engine",
        rotation: "90 0 0",
        scale: "18 18 18"
    })
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}