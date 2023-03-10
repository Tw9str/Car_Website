import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

export default function Customer() {
  return (
    <div className="customers">
      <div className="container">
        <div className="customer">
          <span>Name</span>
          <FaQuoteLeft />
          <p className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}
