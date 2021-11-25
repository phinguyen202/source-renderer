import Todo from './components/todo.js';

document.getElementById('test').appendChild(new Todo({ todoList: ['push-up']}, {}).render());