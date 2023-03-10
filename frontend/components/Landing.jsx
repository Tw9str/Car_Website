import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDoubleArrowDown } from "react-icons/rx";

const Landing = () => {
  return (
    <div className='landing'>
      <div className="container">
        <Image src="/assets/header.jpg" alt="Car Website Background" fill />
        <div className="hero-banner">
          <div className="hero-title">
            <h1>Het vinden van de beste auto was nog nooit zo eenvoudig</h1>
            <Link href="#occasions">Ontdekken</Link>
          </div>
          <Link href="#occasions"><RxDoubleArrowDown/></Link>
        </div>
      </div>
    </div>
  )
}

export default Landing