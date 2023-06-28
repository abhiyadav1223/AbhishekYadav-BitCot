import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "userData",
    initialState:{
        value :
            [   
                {
                    id: 1,
                    name: "Aaron",
                    mobile: "5785664545",
                    email: "aaron@gmail.com",
                    address : "indore"
                },
                {
                    id: 2,
                    name: "Buincy Hanson",
                    mobile: "5785664545",
                    email: "hanson@gmail.com",
                    address : "Bhopal"
                }
            ] ,
            userId : []  
    },
    reducers:{
        addVal : (state,action)=>{
            var val = action.payload
            state.userId = [val]
        },
        addUser : (state,action)=>{
            var userdata = action.payload
            state.value = [...state.value , userdata]
        },
        removeUser : (state,action)=>{
            var userdata = action.payload
            state.value = state.value.filter(val=>val.id !== userdata)
        },
        updateUser : (state,action)=>{
            var userdata = action.payload
            state.value = [...state.value , userdata]
        },
        findName : (state,action)=>{
            var getName = action.payload
        }
    }
})
export const {addVal , addUser , removeUser, updateUser, findName} = slice.actions
export default slice.reducer