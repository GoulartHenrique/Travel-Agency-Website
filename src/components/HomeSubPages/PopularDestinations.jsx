import destinations from "../../data/destinations";

export default function PopularDestinations() {
  return (
    <>
      <h2 className=" title">Popular Destinations</h2>

      <div className="flex gap-4 px-4 ">
        {destinations
          .filter((d) => [1, 8, 12].includes(d.id))
          .map((destination) => (
            <div
              key={destination.id}
              className="card border border-white bg-base-200 rounded-xl overflow-hidden w-full"
            >
              <figure>
                <img
                  className="h-48 border border-white object-cover w-full"
                  src={destination.image}
                  alt={destination.title}
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">{destination.title}</h2>
                <p>{destination.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
