// const iniState = {
//     search: '',
//     status: 'All',
//     priorities: [],
// };

// const filtersReducer = (state = iniState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilerChange':
//             return {
//                 ...state,
//                 search: action.payload,
//             };
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload,
//             };
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default filtersReducer;

//REDUX-TOOLKIT
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilerChange: (state, action) => {
            state.search = action.payload;
        }, //type 'this.name/searchFilerChange'
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    },
});
