import { Component, elt, eltRef } from '@src/index.js';
import TodoList from './list';

export interface ItemModel {
    id: number,
    text: string,
    isCompleted: boolean
}

type TodoSource = Array<ItemModel>;

interface TodoProps {
    title?: string;
}

export default class Todo extends Component<TodoSource, TodoProps> {
    constructor(source: TodoSource, props: TodoProps) {
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
                onkeypress: (e: any) => {
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