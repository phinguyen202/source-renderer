import { Component, elt, eltRef } from '@src/index';
import TodoList from './list';

export interface ItemModel {
    id: number,
    text: string,
    isCompleted: boolean
}

interface TodoProps {
    title?: string;
}

export default class Todo extends Component {
    constructor(protected notes: Array<ItemModel>, protected props: TodoProps) {
        super();
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
            eltRef(this, 'todoList', new TodoList(this.notes)),
        )
    }
}