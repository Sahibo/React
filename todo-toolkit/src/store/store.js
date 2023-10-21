import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from "./reducer"

let store = configureStore({
    reducer:{
        tasks: tasksSlice
    }
})

export default store