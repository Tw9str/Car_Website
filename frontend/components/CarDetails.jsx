import React, {useState} from "react";
import Social from "./Social";
import Image from "next/image";
import Map from "./Map";
import Link from "next/link";
import { BsFuelPump, BsCalendar } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GiRoad, GiMoneyStack } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi"
import { useSelector } from 'react-redux';
import Loader from "./Loader";

export default function CarDetails({car: {make, model, year, km, fuel, price, transmission, description, imagesPath}}) {

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const token = useSelector(state => state.token);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

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
    <div className="car-page">
      <div className="container">
        <Link href="/"><MdOutlineArrowBackIosNew size={24} /></Link>
        <div className="car-title">
          <h1>{make}</h1>
          <h2>{model}</h2>
        </div>
        <div className="car-info-cols">
          <div className="left-col">
            <div className="current-img">
              {imagesPath.map((src, index) => <Image key={index} src={`/assets/${src}`} alt={`${make} ${model}`} fill className={index === selectedImage ? "selected" : ""} priority /> )}
            </div>
            <div className="car-imgs">
              {isLoading && <Loader/>}
              {imagesPath && imagesPath.map((src, index) =><div key={index} className="img-frame">{!hasError && ( <Image src={`/assets/${src}`} alt={`${make} ${model}`}
                width={200} 
                height={125} 
                priority
                onLoad={handleLoad}
                onError={handleError}
                onMouseEnter={() => {
                  console.log(selectedImage);
                  setSelectedImage(index);
                }}
              />)}</div>)}
              {hasError && <p>Error loading image</p>}
            </div>
          </div>
          <aside className="right-col">
            <div className="car-info-row">
              <div><BsFuelPump size={24}/>Brandstof:</div><div>{fuel}</div>
            </div>
            <div className="car-info-row">
              <div><TbManualGearbox size={24}/>Transmissie:</div><div>{transmission}</div>
            </div>
            <div className="car-info-row">
              <div><BsCalendar size={24}/>Bouwjaar:</div><div>{year}</div>
            </div>
            <div className="car-info-row">
              <div><GiRoad size={24}/>KM stand:</div><div>{formatter.format(km) + " KM"}</div>
            </div>
            <div className="car-info-row">
              <div><GiMoneyStack size={24}/>Prijs: </div><div>{price.toLocaleString("nl-NL", options) + ",-"}</div>
            </div>
            <Link href="tel: +31634025584"><FiPhoneCall size={24}/> 0634025584</Link>
            <Social/>
          </aside>
        </div>
        <div className="description">
          <h1>{make}</h1>
          <h2>{model}</h2>
          <p>
            {description}
          </p>
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
      <Map/>
      </div>
    </div>
  )
}
