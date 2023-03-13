import React from 'react';
import Car from "./Car";
import Social from './Social';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {AiOutlinePlusSquare} from "react-icons/ai";
import Link from 'next/link';

const Listings = ({ cars }) => {

  const [carList, setCarList] = useState(cars);
  const token = useSelector(state => state.token);

  function handleCarRemove(id) {
    fetch(`http://localhost:3001/api/car/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setCarList(prevCars => prevCars.filter(car => car._id !== id));
    })
    .catch(err => console.error(err));  
  }

  return (
    <div id="occasions" className="listings">
      <div className="container">
        <h1 className="heading">Occasions</h1>
        <div className="cars">
          {carList.length > 0 && carList.map(({ _id, make, model, year, km, fuel, price, transmission, description, imagesPath, slug }) => 
          <Car key={_id} onCarRemove={handleCarRemove} id={_id} make={make} model={model} year={year} km={km} fuel={fuel} price={price} transmission={transmission} description={description} imagesPath={imagesPath} slug={slug} />)}
          {token && <Link className="plus-icon" href="/add"><AiOutlinePlusSquare/></Link>}
        </div>
        <div className="social">
          <div>Volg ons</div>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Listings
