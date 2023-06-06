import { CartProvider } from './context/useCart';

export function GlobalProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
