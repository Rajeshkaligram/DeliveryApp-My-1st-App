import {configureStore} from '@reduxjs/toolkit';
import CartReducers from './CartReducers';

const MyStore = configureStore({
  reducer: {
    cart: CartReducers,
  },
});

export default MyStore;
