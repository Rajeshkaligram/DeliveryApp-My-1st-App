import {createSlice} from '@reduxjs/toolkit';
const initialState = [];
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const itemInCart = state.find(item => item.id == action.payload.id);
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cart.push({...action.payload, quantity: 1});
      // }
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // const removeFromCart = state.cart.filter(
      //   item => item.id !== action.payload.id,
      // );
      // state.cart = removeFromCart;
      // return state.filter((index) => index.id !== action.payload.id);
      const index = state.findIndex(item => item.id === action.payload.id);
      return state.filter((_, i) => i !== index);
    },
    screenToCart: (state, action) => {
      // const itemInCart = state.find(item => item.id == action.payload.id);
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cart.push({...action.payload, quantity: 1});
      // }
      state.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      } else {
        itemInCart--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
