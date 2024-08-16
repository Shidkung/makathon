// src/components/Cart.tsx
import React from 'react';
import CartItem from './CartItem';
import { CartItem as CartItemType } from '../types';
import './Cart.css'; // ใช้ CSS สำหรับ Cart

interface CartProps {
  items: CartItemType[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p className="store-name">🛒 makro Pro +</p>
      </div>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-footer">
        <button className="checkout-button">ชำระเงิน</button>
        <p className="total-price">{totalPrice.toFixed(2)} ฿</p>
      </div>
    </div>
  );
};

export default Cart;
