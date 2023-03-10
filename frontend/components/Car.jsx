import React from "react";
import Image from "next/image";
import { BsFuelPump, BsCalendar } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import { useSelector } from 'react-redux';
import Link from "next/link";


export default function Car({onCarRemove, id, make, model, year, km, fuel, price, transmission, description, imagesPath}) {

  const token = useSelector(state => state.token);

  const slug = `/occasions/${make.toLowerCase().replace(/\s+/g, '-')}-${model.toLowerCase().replace(/\s+/g, '-')}`;


  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0
  };

  const kmOptions = {
    style: 'decimal',
    minimumFractionDigits: 0
  };

  const formatter = new Intl.NumberFormat('nl-NL', kmOptions);

  return (
    <Link key={id} className="car" href={slug}>
      <div className="img-frame">
        <Image src={`/assets/${imagesPath[0]}`} alt={`${make} ${model}`} fill />
        {token && <div className="car-manage">
          <button><MdOutlineSell/></button>
          <button onClick={(event) => {
            event.preventDefault();
            onCarRemove(id);
        }}><FaRegTrashAlt/></button>
        </div>}
      </div>
      <div className="car-details">
        <div className="upper-row">
          <div className="car-title">
            <h1>{make}</h1>
            <h2>{model}</h2>
          </div>
        </div>
        <div className="lower-row">
          <div className="car-info">
            <div className="upper-col">
              <div><BsFuelPump size={24}/>{fuel}</div>
              <div><TbManualGearbox size={24}/>{transmission}</div>
            </div>
            <div className="lower-col">
              <div><BsCalendar size={24}/>{year}</div>
              <div><GiRoad size={24}/>{formatter.format(km) + " KM"}</div>
            </div>
          </div>
          <div className="price">
            <div>{price.toLocaleString("nl-NL", options) + ",-"}</div>
          </div>
        </div>
      </div>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": ${make},
            "image": "https://bcpauto.nl/assets/${imagesPath[0]}",
            "description": "${make}- ${model} ${description}.",
            "make": {
              "@type": "make",
              "name": "${make}"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://example.com/cars/${make}-${model}",
              "priceCurrency": "EUR",
              "price": "${price}",
              "priceValidUntil": "2030-12-31",
              "availability": "http://schema.org/InStock"
            }
          }
        `}
      </script>
    </Link>
  )
}
