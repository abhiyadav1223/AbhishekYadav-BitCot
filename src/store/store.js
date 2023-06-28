import { configureStore } from "@reduxjs/toolkit";
import uData from "./userData"
const store = configureStore({
    reducer :{
        data : uData
    }
})

export default store;