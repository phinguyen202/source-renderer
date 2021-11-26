import { Component } from '../../src/component.js';
import { elt } from '../../src/dom.js';
import Item from './item.js';
export default class Todo extends Component {
    constructor(source, props) {
        super(source, { // contains all props and functions
            ...props,
            title: 'This is a to-do list'
        }, source.todoList);
    }

    addTodo(text) {
        if (text) {
            this.source.push({
                id: this.source.length + 1,
                text,
                isCompleted: false
            });
        }
    }

    deleteTodo(index) {
        if (index !== undefined) {
            this.source.splice(index, 1);
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
                ...this.source.map((item, index) =>
                    new Item(item, { delete: () => this.deleteTodo(index) })
                )
            ),
        )
    }
}