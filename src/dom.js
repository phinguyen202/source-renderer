import { Component } from "./component.js";

export function elt(type, ...rest) {
    return build(document.createElement(type), ...rest);
}

const NS = 'http://www.w3.org/2000/svg';
export function eltSVG(type, ...rest) {
    return build(document.createElementNS(NS, type), ...rest);
}

function build(dom, props, ...children) {
    for (const prop in props) {
        dom.setAttribute(prop, props[prop])
    }
    for (const child of children) {
        if (child instanceof HTMLElement || child instanceof SVGElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child instanceof Component) {
            child.element = child.render();
            dom.appendChild(child.element);
        }
    }
}

export function eltRef(parent, name, component) {
    parent.children[name] = component;
    return component;
}