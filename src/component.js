export class Component {
    constructor(source, props, ...objects) {
        this.source = new Proxy(source, {
            set: (target, key, value) => {
                target[key] = value;
                if (target instanceof Array) {
                    // with array, element is assigned first
                    // then length is assigned, so ignore the element assignment
                    if (key === 'length') {
                        this.reRender();
                    }
                    return true;
                }
                console.log(`${key} set to ${value}`);
                this.reRender();
                return true;
            }
        });

        this.props = props;
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