// src/components/CartItem.tsx
import React from 'react';
import { CartItem as CartItemType } from '../types';
import './CartItem.css'; // ใช้ CSS แบบแยกไฟล์

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <div className="cart-item-price-quantity">
          <span className="cart-item-price">{item.price.toFixed(2)} ฿</span>
          <span className="cart-item-quantity">x{item.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
