import { elt } from '../../src/dom.js';
export default class Todo {
    constructor(source, props) {
        this.source = source;
        this.props = {
            ...props,
            title: 'This is a to-do list'
        };
    }

    addTodo(text) {
        if (text) {
            this.source.todoList.push(text);
            this.render();
        }
    }

    deleteTodo(index) {
        if (index !== undefined) {
            this.source.todoList.splice(index, 1);
            this.render();
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
                ...this.source.todoList.map((item, index) => elt('li', { class: 'todo-item' }, item, elt('button', { class: 'delete-todo' }, 'x')))
            ),
        )
    }
}