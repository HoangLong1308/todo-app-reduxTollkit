// const iniState = [
//     { id: 1, name: 'Learn', completed: false, priority: 'Medium' },
//     { id: 2, name: 'Eat', completed: true, priority: 'High' },
//     { id: 3, name: 'Swimming', completed: false, priority: 'Low' },
// ];

// const todoListReducer = (state = iniState, action) => {
//     // console.log(state, action);
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload];
//         case 'todoList/toggleTodoStatus':
//             return state.map((todo) => {
//                 return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
//             });

//         default:
//             return state;
//     }
// };

// export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn', completed: false, priority: 'Medium' },
        { id: 2, name: 'Eat', completed: true, priority: 'High' },
        { id: 3, name: 'Swimming', completed: false, priority: 'Low' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }, //action createtor
        toggleTodoStatus: (state, action) => {
            // const currentTodo = state.filter((todo) => todo.id === action.payload); tra ve 1 mang
            const currentTodo = state.find((todo) => todo.id === action.payload); //tra ve 1 object
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    },
});
