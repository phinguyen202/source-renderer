import { elt } from '../../src/dom.js';
import Item from './item.js';
export default class Todo {
    constructor(source, props) {
        this.source = source; // alway is object
        this.props = { // contains all props and functions
            ...props,
            title: 'This is a to-do list'
        };
    }

    addTodo(text) {
        if (text) {
            this.source.todoList.push({
                id: this.source.todoList.length + 1,
                text,
                isCompleted: false
            });
            // this.render();
            console.log(this.source.todoList);
        }
    }

    deleteTodo(index) {
        if (index !== undefined) {
            this.source.todoList.splice(index, 1);
            // this.render();
            console.log(this.source.todoList);
        }
    }

    render() {
        return elt('div', { class: 'todo' },
            elt('h1', null, this.props.title),
            elt('input', {
                type: 'text',
                class: 'new-todo',
                placeholder: 'What needs to be done?',
                autofocus: true,
                onkeypress: (e) => {
                    if (e.key === 'Enter') {
                        this.addTodo(e.target.value);
                        e.target.value = '';
                    }
                }
            }),
            elt('ul', { class: 'todo-list' },
                ...this.source.todoList.map((item, index) =>
                    new Item(item, { delete: () => this.deleteTodo(index) }).render()
                )
            ),
        )
    }
}