import { Component, elt } from '../../src';
import { ItemModel } from './todo.js';

interface ItemProps {
    delete: () => void;
}
export default class Item extends Component<ItemModel, ItemProps> {
    constructor(source: ItemModel, props: ItemProps) {
        super(source, props);
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
                    // render this if you have an other effect on itd
                }
            }),
            this.source.text,
            elt('button', {
                class: 'item-todo',
                onclick: () => this.props.delete()
            }, 'x')
        )
    }
}