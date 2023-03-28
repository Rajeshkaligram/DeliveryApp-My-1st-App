import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_TO_WISHLIST,
} from './Actions';

export const SetCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
export const RemoveCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
export const SetWishlist = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});
export const RemoveWishlist = index => ({
  type: REMOVE_TO_WISHLIST,
  payload: index,
});
