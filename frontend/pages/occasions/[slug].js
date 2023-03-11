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
    const res = await fetch(`http://localhost:3001/api/cars/car/${slug}`);
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
