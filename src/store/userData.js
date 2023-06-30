import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "userData",
    initialState: {
        value:
            [
                {
                    id: 1,
                    name: "Aaron",
                    mobile: "5785664565",
                    email: "aaron@gmail.com",
                    address: "indore"
                },
                {
                    id: 2,
                    name: "Buincy Hanson",
                    mobile: "98765412356",
                    email: "hanson@gmail.com",
                    address: "Bhopal"
                }
            ],
        userId: []
    },
    reducers: {
        addVal: (state, action) => {
            var val = action.payload
            state.userId = [val]
        },
        addUser: (state, action) => {
            var userdata = action.payload
            state.value = [...state.value, userdata]
        },
        removeUser: (state, action) => {
            var userdata = action.payload
            state.value = state.value.filter(val => val.id !== userdata)
        },
        updateUser: (state, action) => {
            var userdata = action.payload
            var nm = state.value[userdata.id - 1]
            nm.id = userdata.id
            nm.name = userdata.name
            nm.mobile = userdata.mobile
            nm.email = userdata.email
            nm.address = userdata.address
        },
        finddata : (state, action) => {
            var data = action.payload
            state.value = state.value.filter(eb => eb.name.toLowerCase().indexOf(data.toLocaleLowerCase())> -1 || eb.mobile.indexOf(data)>-1)
        }
    }
})
export const { addVal, addUser, removeUser, updateUser, finddata } = slice.actions
export default slice.reducer