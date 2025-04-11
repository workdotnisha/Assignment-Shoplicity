import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, quantity - 1)}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button 
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;