import { configureStore } from '@reduxjs/toolkit';
import newsSlice from "./reducer"

let store = configureStore({
    reducer:{
        news: newsSlice
    }
})

export default store