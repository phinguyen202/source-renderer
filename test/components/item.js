import { elt } from '../../src/dom.js';

export default class Item {
    constructor(source, props) {
        this.source = source;
        this.props = {
            ...props,
        };
    }

    render() {
        return elt('li', { class: 'todo-item' }, this.source.text,
            elt('button', {
                class: 'item-todo',
                onclick: (e) => this.props.delete()
            }, 'x')
        )
    }
}