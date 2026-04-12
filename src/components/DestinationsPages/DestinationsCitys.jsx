import destinations from "../../data/destinations";
import { Link } from "react-router";

export default function DestinationsCitys() {
  return (
    <div className="flex flex-col gap-5 text-center px-8">
      <h1 className="title pt-10">Explore All Destinations</h1>
      <p className="border-style w-fit mx-auto p-3 hover:bg-base-200">
        Discover breathtaking destinations from around the world, carefully
        curated for every type of traveler
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 ">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="card bg-base-200 rounded-xl overflow-hidden w-full border-style"
          >
            <figure>
              <img
                className="h-48 object-cover w-full "
                src={destination.image}
                alt={destination.title}
              />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title">
                <Link to={`/destinations/${destination.slug}`}>
                  {destination.title}
                </Link>
              </h2>
              <p>{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
