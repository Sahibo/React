import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        var url = '/products.json';
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        categoriesArr: [],
        productsArr: [],
        isLoading: false,
        error: null,
    },

    reducers: {
        addObject: (state, action) => {
            let newarr = [...state.arr]
            newarr.push(action.payload)
            return {...state, arr: newarr}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.categoriesArr = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    },

})

export default productsSlice.reducer