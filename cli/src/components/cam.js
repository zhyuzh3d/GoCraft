//相机元素
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

let dom = h('a-camera', {
    near: "0.1",
    position: "0 0 0",
    'wasd-controls-enabled': "false",
    'mouse-cursor':'true'
}, [
    h('a-entity', {
        cursor: "rayOrigin: mouse;",
        raycaster: "objects: .clickable;"
    })
])


export default class myComponent extends React.Component {
    render() {
        return dom
    }
}