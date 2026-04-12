import { useParams } from "react-router";

import destinations from "../data/destinations";

export default function DestinationDetail() {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) return <p>Destination not found.</p>;

  return (
    <div className="px-8 py-10 text-center">
      <h1 className="text-3xl text-blue-500 font-bold mt-6 pb-10 ">
        {destination.title}
      </h1>
      <img
        className="w-200 h-75 object-cover rounded-xl mx-auto"
        src={destination.image}
        alt={destination.title}
      />
      <p className="mt-4">{destination.description}</p>
    </div>
  );
}
