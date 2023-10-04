export let initialState = {
    tasks: [],
    doneTasks: []
}

export function reducer(state, action) {
    switch (action.type) {
        case 'Add':
            let newTasksArr = [...state.tasks]
            newTasksArr.push(action.payload)
            
            return { ...state, tasks: newTasksArr }
        case 'Done':
            let newDoneTasksArr = [...state.doneTasks]
            newDoneTasksArr.push(action.payload)

            let updateTasksArr = [...state.tasks]
            updateTasksArr = updateTasksArr.filter((task) => task !== action.payload)
            
            return { ...state, tasks: updateTasksArr, doneTasks: newDoneTasksArr }
        case 'Delete':
            let deleteTasksArr = [...state.tasks]
            deleteTasksArr = deleteTasksArr.filter((task) => task !== action.payload)
            
            return { ...state, tasks: deleteTasksArr }
        case 'Undone':
            let updatedTasksArr = [...state.tasks]
            updatedTasksArr.push(action.payload)

            let doneTasksArr = [...state.doneTasks]
            doneTasksArr = doneTasksArr.filter((task) => task !== action.payload)
            
            return {...state, tasks: updatedTasksArr, doneTasks: doneTasksArr}
        default:
            return state
    }
}