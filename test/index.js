import Todo from './components/todo.js';

const todoList = [
    {
        id: 1,
        text: 'Learn JavaScript',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Learn HTML',
        isCompleted: false
    }
];
document.getElementById('test').appendChild(new Todo({ todoList }, {}).render());

setInterval(() => { 
    console.log(todoList);
}, 10000);