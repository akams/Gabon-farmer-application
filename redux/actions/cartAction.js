import { UPDATE_CART } from '../reducers/cartReducer';

export const updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

export function dispatchSetCart(cart) {
  return (dispatch, getState) => {
    console.warn('state before: ', getState());
    dispatch(updateCart(cart));
    console.warn('state after: ', getState());
  };
}
