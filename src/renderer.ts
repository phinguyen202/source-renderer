import { Component } from "./component.js";

function Renderer(container: HTMLElement, root: Component<any, any>) {
    if (container instanceof HTMLElement && root instanceof Component) {
        root.element = root.render();
        container.appendChild(root.element);
    }
}

export { Renderer };