/* eslint-disable no-param-reassign */
export const UPDATE_CART = 'UPDATE_CART';

const initialState = {
  cart: [],
  total: 0,
};

const getTtl = (carts) =>
  carts.reduce((acc, curr) => {
    acc += curr.price * curr.qte;
    return acc;
  }, 0);

const updateItemFromCart = (item, state) => {
  if (state.length === 0) {
    return state.concat(item);
  }
  return state.map((s) => {
    if (s.id === item.id) {
      return {
        ...s,
        ...item,
      };
    }
    return s;
  });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      const allCart = updateItemFromCart(action.cart, state.cart);
      const ttl = getTtl(allCart);
      return {
        ...state,
        cart: allCart,
        total: ttl,
      };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
