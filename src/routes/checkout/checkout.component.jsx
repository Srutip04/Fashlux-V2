import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems,addItemToCart } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>Decrement</span>
              <span onClick={() =>addItemToCart(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
