import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";


import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="Total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
