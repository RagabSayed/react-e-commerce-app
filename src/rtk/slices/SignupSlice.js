import {createSlice } from '@reduxjs/toolkit';

const usersData = localStorage.getItem('usersData')? JSON.parse(localStorage.getItem('usersData')): [];
const signupSlice = createSlice({
    initialState: {
        usersData,
    },
    name: 'signupSlice',
    reducers: {
        submitForm: (state, action) => {
            state.usersData.push(action.payload);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        editUser: (state, action) => {
            const editedUserIndex = state.usersData.findIndex(user => user.id === action.payload.id);
            state.usersData.splice(editedUserIndex, 1, action.payload);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        editUserStatues: (state, action) => {
            const userIndex = state.usersData.findIndex(user => user.id === action.payload.id);
            state.usersData[userIndex].status = action.payload.status;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        }
    }
    
})
export const {submitForm, editUser, editUserStatues} = signupSlice.actions;
export default signupSlice.reducer;