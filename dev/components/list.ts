import { Component, elt } from '@src/index.js';
import Item from './item';
import { ItemModel } from './todo';

type TodoListSource = Array<ItemModel>;

interface TodoListProps {}


export default class TodoList extends Component<TodoListSource, TodoListProps> {
    constructor(source: TodoListSource, props: TodoListProps) {
        super(source, props);
    }

    addTodo(text: string) {
        if (text) {
            this.source.push({
                id: this.source.length + 1,
                text,
                isCompleted: false
            });
            this.reRender();
        }
    }

    deleteTodo(index: number) {
        if (index !== undefined && this.source[index]) {
            this.source.splice(index, 1);
            this.reRender();
        }
    }

    render() {
        return elt('ul', { class: 'todo-list' },
            ...this.source.map((item: ItemModel, index: number) =>
                new Item(item, { delete: () => this.deleteTodo(index) })
            )
        );
    }
}