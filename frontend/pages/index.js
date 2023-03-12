import React from "react";
import Landing from "@/components/Landing";
import Categories from "@/components/Categories";
import Listings from "@/components/Listings";
import Customer from "@/components/Customer";

const Home = ({ cars }) => {
  return (
    <>
      <Landing />
      <Categories />
      <Listings cars={cars} />
      <Customer />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://car-website-api.vercel.app/api/cars");
    const cars = await res.json();
    return { props: { cars } };
  } catch (error) {
    console.log(error);
    return { props: { cars: [] } };
  }
};

export default Home;
