import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {value:{username: ''}};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.value = action.payload;
        },

        logout:(state)=>{
            state.value = initialState.value;
        }
    }

})


const Store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})

export const {login, logout} = userSlice.actions;
export default Store