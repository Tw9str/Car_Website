import React from 'react';
import Image from 'next/image';

export default function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <div className="car-shop">
          <Image src="/assets/1678109174808-1header.jpg" alt="Car Shop" fill />
          <div className="shop-info">
            <div className="desc">
              <h2>Lorem ipsum dolor</h2>
              <p>animi minima aperiam dolorum!</p>
            </div>
            <button>Shop</button>
          </div>
        </div>
        <div className="car-parts">
          <Image src="/assets/shop1.png" alt="Car Offers" fill />
          <div className="shop-info">
            <div className="desc">
              <h2>Lorem ipsum dolor</h2>
              <p>animi minima aperiam dolorum!</p>
            </div>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </div>
  )
}
