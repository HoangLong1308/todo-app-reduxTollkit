import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => {
    // console.log(state);
    return state.filter.search;
};
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritySelector = (state) => state.filter.priorities;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo) => {
//         // console.log(state.todoList);
//         return todo.name.includes(searchTextSelector(state));
//     });
//     return todosRemaining;
// };

export const todosRemainningSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            //cach 1
            // return priorities.length
            //     ? todo.name.includes(searchText) &&
            //           (status === 'Completed' ? todo.completed : !todo.completed) &&
            //           priorities.includes(todo.priority)
            //     : todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed);

            //cach 2
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    },
);
