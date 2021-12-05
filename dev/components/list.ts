import { Component, elt } from '@src/index';
import Item from './item';
import { ItemModel } from './todo';

export default class TodoList extends Component {
    constructor(protected notes: Array<ItemModel>) {
        super();
    }

    addTodo(text: string) {
        if (text) {
            this.notes.push({
                id: this.notes.length + 1,
                text,
                isCompleted: false
            });
            this.reRender();
        }
    }

    deleteTodo(index: number) {
        if (index !== undefined && this.notes[index]) {
            this.notes.splice(index, 1);
            this.reRender();
        }
    }

    render() {
        return elt('ul', { class: 'todo-list' },
            ...this.notes.map((item: ItemModel, index: number) =>
                new Item(item, { delete: () => this.deleteTodo(index) })
            )
        );
    }
}