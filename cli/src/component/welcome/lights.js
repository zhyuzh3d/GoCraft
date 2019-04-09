//所有灯光
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

//生成一个灯光
let lit = (type, position, intensity, color, distance, decay) => {
    return h('a-light', {
        type,
        position,
        intensity,
        color,
        distance,
        decay
    })
}

let dom = h('a-entity', {}, [
    lit('point', '0 0 -10', '10', '#AAF', '20', '1'),
    lit('point', '6 0 -12', '40', '#FF0', '20', '3'),
    lit('point', '-6 0 -12', '40', '#F0A', '20', '3'),
    lit('point', '0 5 -5', '20', '#0F0', '10', '1'),
    lit('point', '0 -5 -5', '20', '#F00', '10', '1'),
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}