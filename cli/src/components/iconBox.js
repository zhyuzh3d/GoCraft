//演示台图标
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';


function cc(a) {
    alert(a)
}

let gen = (position, size, clr, txt,href) => {
    return h('a-entity', {
        position,
        scale: '' + size + ' ' + size + ' ' + size,
        href,
    }, [
        h('a-box', {
            material: "side:double;color:" + clr + ";\
            blending:additive;\
            opacity:0.2,\
            metalness:0.8",
        }),
        h('a-box', {
            id: 'tar',
            class: 'clickable',
            material: "side:double;color:" + clr + ";\
            blending:additive;\
            opacity:0.2,\
            metalness:0.8",
            scale: '1.2 1.2 1.2'
        }),
        h('a-entity', {
            material: 'metalness: 0.85;color:#AAA' + clr,
            position: "-0.4 -0.08 0",
            'text-geometry': "value:" + txt.toUpperCase() + "; \
            font: #optimerBoldFont;\
            height:0.1;\
            size:0.2;\
            curveSegments:1"
        })
    ])
}

export default class myComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var dom = ReactDOM.findDOMNode(this);
        var tarEl = dom.querySelector('#tar');
        tarEl.addEventListener('click', function () {
            //cc(boxEl.getAttribute('id'))
            // console.log(dom)
            location=dom.getAttribute('href')
        });

    }
    render() {
        return gen(this.props.position,
            this.props.size,
            this.props.color,
            this.props.text,
            this.props.href)
    }
}