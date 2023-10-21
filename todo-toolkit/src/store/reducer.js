import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksArr: []
  },
  reducers: {
    addTask: (state, action) => {
      let newArr = [...state.tasksArr]
      newArr.push(action.payload)
      return { ...state, tasksArr: newArr }
    },
    updateTask: (state, action) => {
      let { id, task } = action.payload;
      let newArr = [...state.tasksArr];
    
      if (id >= 0 && id < newArr.length) {
        newArr[id] = task; // Store the string directly
      }
    
      return { ...state, tasksArr: newArr };
    },
    deleteTask: (state, action) => {
      let id = action.payload;
      if (id !== -1) {
        let newArr = [...state.tasksArr]
        newArr.splice(id, 1)
        return { ...state, tasksArr: newArr }
      }
    },
  }

})

export const { addTask, updateTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer