let initialState =
{
    expensesArr: [],
}


export default function reducer(state = initialState, action)
{
    if (action.type === "add")
    {
        let newArr = [...state.expensesArr, action.payload];
        return { ...state, expensesArr: newArr };
    }
    else if (action.type === "delete")
    {
        let index = action.payload
        let newArr = state.expensesArr.filter((expense) => expense.id !== index);
        return { ...state, expensesArr: newArr };
    }

    return state;
}