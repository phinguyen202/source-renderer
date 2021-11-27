import { Component } from '../../src/component.js';
import { elt, eltRef } from '../../src/dom.js';
import TodoList from './list.js';
export default class Todo extends Component {
    constructor(source, props) {
        super(source, { // contains all props and functions
            ...props,
            title: 'This is a to-do list'
        });
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
                        this.children.todoList.addTodo(e.target.value);
                        e.target.value = '';
                        e.target.focus();
                    }
                }
            }),
            eltRef(this, 'todoList', new TodoList(this.source, {})),
        )
    }
}