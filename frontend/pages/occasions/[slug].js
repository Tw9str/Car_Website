import CarDetails from "@/components/CarDetails";
import { useRouter } from "next/router";

export default function CarDetailsPage({ car, error }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!car) {
    return <div>Car not found.</div>;
  }

  return <CarDetails car={car} />;
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  try {
<<<<<<< HEAD
    const res = await fetch(`https://car-website-api.vercel.app/cars/car/${slug}`);
=======
    const res = await fetch(`https://car-website-api.vercel.app/api/cars/car/${slug}`);
>>>>>>> 87253c33842df2f6e80e0ff06d6c182ce173227f
    if (!res.ok) {
      throw new Error("Failed to fetch car details");
    }
    const car = await res.json();
    return { props: { car } };
  } catch (error) {
    console.log(error);
    return { props: { car: [], error: "Failed to fetch car details." } };
  }
};
