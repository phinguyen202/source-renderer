import { Component, elt } from '../../index.js';

export default class Item extends Component {
    constructor(source, props) {
        super(source, props);
    }

    render() {
        return elt('li', { class: 'todo-item' },
            elt('input', {
                class: 'todo-item-checkbox',
                type: 'checkbox',
                checked: this.source.isCompleted,
                onclick: (e) => {
                    this.source.isCompleted = e.target.checked;
                    // do not need to re-render here because the UI has already been updated itself
                }
            }),
            this.source.text,
            elt('button', {
                class: 'item-todo',
                onclick: (e) => this.props.delete()
            }, 'x')
        )
    }
}