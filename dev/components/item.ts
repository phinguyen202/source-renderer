import { Component, elt } from '../../src';
import { ItemModel } from './todo';

interface Fns {
    delete: () => void;
}
export default class Item extends Component {
    constructor(protected source: ItemModel, protected fns: Fns) {
        super();
    }

    render() {
        return elt('li', { class: 'todo-item' },
            elt('input', {
                class: 'todo-item-checkbox',
                type: 'checkbox',
                checked: this.source.isCompleted,
                onclick: (e: any) => {
                    this.source.isCompleted = e.target.checked;
                    // do not need to re-render here because the UI has already been updated itself
                    // render this if you have an other effect on it
                }
            }),
            this.source.text,
            elt('button', {
                class: 'item-todo',
                onclick: () => this.fns.delete()
            }, 'x')
        )
    }
}