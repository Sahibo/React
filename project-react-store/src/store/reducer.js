import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    var url = "/products.json";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    dataArr: [],
    basketArr: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addToBag: (state, action) => {
      const productToAdd = action.payload;

      console.log(productToAdd.id)
      const existingProductIndex = state.basketArr.findIndex(
        (product) => product.id === productToAdd.id
      );

    //   console.log(existingProductIndex)

      if (existingProductIndex !== -1) {
        // If the product already exists in the basket, increase its quantity by 1
        const updatedBasketArr = state.basketArr.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        return { ...state, basketArr: updatedBasketArr };
      } else {
        // If the product is not in the basket, add it with quantity 1
        const newProduct = { ...productToAdd, quantity: 1 };
        const updatedBasketArr = [...state.basketArr, newProduct];

        return { ...state, basketArr: updatedBasketArr };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.dataArr = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { addToBag } = productsSlice.actions;
export default productsSlice.reducer;
