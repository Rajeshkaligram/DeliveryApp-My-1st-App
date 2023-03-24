export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const SetCart = cart => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
};
export const RemoveCart = cart => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cart,
  });
};
