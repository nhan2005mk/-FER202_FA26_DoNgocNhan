import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialCart, CART_ACTIONS, getCartTotals } from '../reducers/cartReducer';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const value = {
    cart,
    dispatch,
    ...getCartTotals(cart),
    addToCart: (product) => dispatch({ type: CART_ACTIONS.ADD, payload: product }),
    clearCart: () => dispatch({ type: CART_ACTIONS.CLEAR }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook đi kèm Provider; quy tắc này chỉ ảnh hưởng hot reload
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart phải được dùng bên trong <CartProvider>');
  return context;
};
