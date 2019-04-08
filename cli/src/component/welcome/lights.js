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
    lit('point', '0 0 -10', '8', '#AAF', '20', '1'),
    lit('point', '6 0 -12', '35', '#FF0', '20', '3'),
    lit('point', '-6 0 -12', '35', '#F0A', '20', '3'),
    lit('point', '0 5 -5', '25', '#0F0', '20', '3'),
    lit('point', '0 -5 -5', '25', '#F00', '20', '3'),
])

export default class myComponent extends React.Component {
    render() {
        return dom
    }
}