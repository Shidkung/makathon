// src/App.tsx
import React from 'react';
import Cart from '../components/cart';
import { CartItem } from '../types';

const items: CartItem[] = [
  { id: 1, name: 'มันฝรั่งไทย', imageUrl: 'https://via.placeholder.com/50', price: 49.00, quantity: 1 },
  { id: 2, name: 'ผักสลัดกรินโอ๊ค', imageUrl: 'https://via.placeholder.com/50', price: 29.00, quantity: 1 },
  { id: 3, name: 'แมกโนเลีย นมพาสเจอร์ไรซ์ 5 ล.', imageUrl: 'https://via.placeholder.com/50', price: 99.00, quantity: 1 },
  { id: 4, name: 'ฟาร์มเฮอร์ส ยูเนียน กรีกโยเกิร์ต 1 กก.', imageUrl: 'https://via.placeholder.com/50', price: 159.99, quantity: 1 },
  { id: 5, name: 'ซับยัง ราเม็งแห้ง รสไก่เผ็ด 140 ก. x 5', imageUrl: 'https://via.placeholder.com/50', price: 109.99, quantity: 1 },
  { id: 6, name: 'ซับยัง ราเม็ง รสฮอริซินอล 140 ก. 5 ซอง', imageUrl: 'https://via.placeholder.com/50', price: 109.99, quantity: 1 },
];

const Showitems: React.FC = () => {
  return (
    <div>
      <Cart items={items} />
    </div>
  );
};

export default Showitems;
