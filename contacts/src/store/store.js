import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from "./reducer"

let store = configureStore({
    reducer:{
        contacts: contactsSlice
    }
})

export default store