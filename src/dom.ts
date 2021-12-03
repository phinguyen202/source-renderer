import { Component } from "./component";

type ChildType =  HTMLElement | string | Component<any, any>;

export function elt(type: keyof HTMLElementTagNameMap, props: any, ...children: ChildType[]) {
    const dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for (const child of children) {
        if (child instanceof HTMLElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child instanceof Component) {
            child.element = child.render();
            dom.appendChild(child.element);
        }
    }
    return dom;
}

type SVGChild = SVGElement | string | Component<any, any>;

const NS = 'http://www.w3.org/2000/svg';
export function eltSVG(type: keyof SVGElementTagNameMap, props: any, ...children: Array<SVGChild>) {
    const dom = document.createElementNS(NS, type);
    if (props) {
        for (const prop in props) {
            dom.setAttribute(prop, props[prop])
        }
    }
    for (const child of children) {
        if (child instanceof SVGElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child instanceof Component) {
            child.element = child.render();
            dom.appendChild(child.element);
        }
    }
    return dom;
}

export function eltRef(parent: any, name: string, component: Component<any, any>) {
    if (parent && parent.children && name) {
        parent.children[name] = component;
    }
    return component;
}