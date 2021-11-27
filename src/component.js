export class Component {
    constructor(source, props) {
        this.source = source;
        this.props = props;
        this.children = {};
    }

    reRender() {
        if (this.element) {
            console.debug('re-render', this.constructor.name);
            const newElement = this.render();
            this.element.replaceWith(newElement);
            this.element = newElement;
        }
    }
}