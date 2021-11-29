import { Component } from "./component.js";

function Renderer(container, root) {
    if (container instanceof HTMLElement && root instanceof Component) {
        root.element = root.render();
        container.appendChild(root.element);
    }
}

export { Renderer };