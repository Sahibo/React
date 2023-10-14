import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit';

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        // var url = 'https://newsapi.org/v2/everything?' +
        //   'q=Apple&' +
        //   'from=2023-10-14&' +
        //   'sortBy=popularity&' +
        //   'apiKey=8fa592befbad4e34bd2c9132a78f9875';
          
        var url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8fa592befbad4e34bd2c9132a78f9875';

        const res = await fetch(url)
        const data = await res.json()
        return data
    }
  )

const newsSlice = createSlice({
    name: 'news', 
    initialState: {
        newsArr:[],
        isLoading:false,
        error:null,
        sortOrder: 'ASC'
    },

  reducers:{
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    },
},
extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.newsArr = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = true
    })
  },

})


export default newsSlice.reducer