import {createSlice} from '@reduxjs/toolkit';
const initialState = [];
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find(item => item.key == action.payload.key);
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.push({...action.payload, qty: 1});
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.filter(
        item => item.key !== action.payload.key,
      );
      state = removeFromCart;
      return state.filter(index => index.key !== action.payload.key);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.find(item => item.key == action.payload.key);
      itemInCart.qty++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.find(item => item.key == action.payload.key);
      if (itemInCart.qty == 1) {
        const removeFromCart = state.filter(
          item => item.key !== action.payload.key,
        );
        state = removeFromCart;
        return state.filter(index => index.key !== action.payload.key);
      } else {
        itemInCart.qty--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
