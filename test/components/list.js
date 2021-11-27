import { Component } from '../../src/component.js';
import { elt } from '../../src/dom.js';
import Item from './item.js';

export default class TodoList extends Component {
    constructor(source, props) {
        super(source, props);
    }

    addTodo(text) {
        if (text) {
            this.source.push({
                id: this.source.length + 1,
                text,
                isCompleted: false
            });
            this.reRender();
        }
    }

    deleteTodo(index) {
        if (index !== undefined && this.source[index]) {
            this.source.splice(index, 1);
            this.reRender();
        }
    }

    render() {
        return elt('ul', { class: 'todo-list' },
            ...this.source.map((item, index) =>
                new Item(item, { delete: () => this.deleteTodo(index) })
            )
        );
    }
}