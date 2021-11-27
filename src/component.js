export class Component {
    constructor(source, props) {
        this.source = source;
        this.props = props;
        this.children = {};
    }

    reRender() {
        console.log('re-render', this.constructor.name);
        if (this.element) {
            const newElement = this.render();
            this.element.replaceWith(newElement);
            this.element = newElement;
        }
    }
}