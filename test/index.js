import Todo from './components/todo.js';
import { Renderer } from '../src/renderer.js';

const source = [
    {
        id: 1,
        text: 'Learn JavaScript',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn HTML',
        isCompleted: false
    }
];

const todo = new Todo(source, {});
const container = document.getElementById('container');

Renderer(container, todo);

document.getElementById('source-but').addEventListener('click', () => {
    console.log(source);
});