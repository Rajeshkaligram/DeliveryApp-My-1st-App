import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
    cart: null,
}

const userResponse = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, cart: state}
    }
}