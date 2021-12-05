import { Component } from "./component";

type ChildType =  HTMLElement | string | Component;

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

type SVGChildType = SVGElement | string | Component;

const NS = 'http://www.w3.org/2000/svg';
export function eltSVG(type: keyof SVGElementTagNameMap, props: any, ...children: Array<SVGChildType>) {
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

export function eltRef(parent: any, name: string, component: Component) {
    if (parent && name) {
        if (!parent.children) {
            parent.children = {};
        }
        parent.children[name] = component;
    }
    return component;
}