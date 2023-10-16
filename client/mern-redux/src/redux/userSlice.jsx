import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        getUser: (state, action)=>{
           state.users = action.payload.map((user)=>{
            return {id: user._id, name: user.name, email: user.email, age: user.age}
           }) 
        },
        addUser: (state, action)=>{
            state.users.push(action.payload)
        },
        updateUser: (state, action)=>{
            const index=state.users.findIndex(x=> x.id === action.payload.id)
            state.users[index]={
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                age: action.payload.age
            }

        },
        deleteUser: (state, action)=>{
            const id= action.payload.id;
            state.users = state.users.filter((user)=> user.id !== id)
        }

    }
})

export const usersActions = usersSlice.actions

export default usersSlice