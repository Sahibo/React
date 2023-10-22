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
      const productToAdd = action.payload
      console.log(productToAdd.id)
      const existingProductIndex = state.basketArr.findIndex(
        (product) => product.id === productToAdd.id
      )
      if (existingProductIndex !== -1) {
        const updatedBasketArr = state.basketArr.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        return { ...state, basketArr: updatedBasketArr }
      } else {
        const newProduct = { ...productToAdd, quantity: 1 }
        const updatedBasketArr = [...state.basketArr, newProduct]

        return { ...state, basketArr: updatedBasketArr }
      }
    },
    increaseQuantity: (state, action) => {
      const productToUpdate = action.payload
      const updatedBasketArr = state.basketArr.map((product) => {
        if (product.id === productToUpdate.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product
      });

      return { ...state, basketArr: updatedBasketArr }
    },

    decreaseQuantity: (state, action) => {
      const productToUpdate = action.payload
      const updatedBasketArr = state.basketArr.map((product) => {
        if (product.id === productToUpdate.id) {
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }
          else{
            return {...product}
          }
        }
        return product
      })

      return { ...state, basketArr: updatedBasketArr }
    },

    removeProduct: (state, action) => {
      const productToRemove = action.payload
      const updatedBasketArr = state.basketArr.filter(
        (product) => product.id !== productToRemove.id
      )

      return { ...state, basketArr: updatedBasketArr }
    },

    clearBasket: (state, action) => {
      const newArr = []
      return {...state, basketArr: newArr}
    }
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

export const { addToBag, increaseQuantity, decreaseQuantity, removeProduct, clearBasket } = productsSlice.actions;
export default productsSlice.reducer;