import { createSlice } from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: 'contacts',
    
    initialState: {
      contactsArr: []
    },

    reducers: {
      addContact: (state, action) => {
        let newArr = [...state.contactsArr]
        newArr.push(action.payload)
        return { ...state, contactsArr: newArr }
      },

      updateContact: (state, action) => {
        let { id, contact } = action.payload
        let newArr = [...state.contactsArr]
  
        console.log(id, contact)
        if (id >= 0 && id < newArr.length) {
          newArr[id] = { ...contact }
        }
        return { ...state, contactsArr: newArr }
      },
      
      deleteContact: (state, action) => {
        let id = action.payload;
        if (id !== -1) {
          let newArr = [...state.contactsArr]
          newArr.splice(id, 1)
          return { ...state, contactsArr: newArr }
        }
      },
    }
  
  })
  
  export const { addContact, updateContact, deleteContact } = contactsSlice.actions
  
  export default contactsSlice.reducer