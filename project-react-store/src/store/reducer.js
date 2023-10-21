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
            return { ...state, arr: newarr }
        },
        handleSort: (state, action) => {
            const newArr = [...state.categoriesArr].map((category) => ({
                ...category,
                subcategories: category.subcategories.map((subcategory) => ({
                    ...subcategory,
                    products: [...subcategory.products].sort((a, b) => {
                        if (action.payload === 'Sort by price to increase') {
                            return a.price - b.price;
                        } else if (action.payload === 'Sort by price to decrease') {
                            return b.price - a.price;
                        }
                    }),
                })),
            }));
            return { ...state, categoriesArr: newArr };
        }

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


export const { handleSort } = productsSlice.actions
export default productsSlice.reducer