//带链接的方盒透明图标
import React from "react";
import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-html-shader';

let gen = (position, size, clr, txt, href, label, labelId) => {
    return h('a-entity', {
        position,
        scale: '' + size + ' ' + size + ' ' + size,
        href,
    }, [
        h('a-entity', {
            geometry: "primitive: plane",
            position: "0 -0.75 0",
            scale: "0.25 0.25 0.25",
            material: "shader:html;\
            target:#" + labelId + ";\
            transparent:true;\
            ratio:height;\
            fps:1;"
        }),
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
            material: 'metalness: 0.85;color:' + clr,
            position: "-0.4 -0.08 0",
            'text-geometry': "value:" + txt.toUpperCase() + "; \
            font: #optimerBoldFont;\
            height:0.1;\
            size:0.2;\
            curveSegments:1"
        }),
    ])
}

function createLabelDom(labelId, label,color) {
    //添加html标签元素
    let dom = document.getElementById('aframeTextLabels');
    if (!dom) {
        dom = document.createElement("div");
        dom.setAttribute("id", "aframeTextLabels")
        document.getElementsByTagName("body")[0].appendChild(dom)
    }
    let labelDom = document.createElement("div");
    labelDom.setAttribute("id", labelId);
    labelDom.innerHTML = label
    labelDom.style.position = 'absolute';
    labelDom.style['z-index'] = '-100';
    labelDom.style.color = color;
    labelDom.style['font-size'] = '100px';
    labelDom.style['font-weight'] = 'bold';
    dom.appendChild(labelDom)
}

export default class myComponent extends React.Component {
    constructor(props) {
        super(props);
        this['labelId'] = ('label' + Math.random()).replace('.', '')
        this.state = {
            use: false
        };
    }

    componentDidMount() {
        setTimeout(() => {            
            createLabelDom(this['labelId'], this.props.label || this.props.text,this.props.color)
            this.setState({
                use: true
            });
            this.render()
            
            //添加点击功能
            let rdom = ReactDOM.findDOMNode(this);
            let tarEl = rdom.querySelector('#tar');
            tarEl.addEventListener('click', function () {
                location = rdom.getAttribute('href')
            });            
        }, 1000);
    }
    render() {
        return this.state.use ? gen(this.props.position,
            this.props.size,
            this.props.color,
            this.props.text,
            this.props.href,
            this.props.label,
            this['labelId'],
        ) : null
    }
}