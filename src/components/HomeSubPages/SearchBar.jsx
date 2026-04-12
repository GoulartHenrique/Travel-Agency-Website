import { useState } from "react";
import { useNavigate } from "react-router";
import destinations from "../../data/destinations";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  function handleDestinationSuggestions(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filter = destinations.filter((d) =>
        d.title.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filter);
    } else {
      setSuggestions([]);
    }
  }

  function handleSelect(destination) {
    setQuery(destination.title);
    setSuggestions([]);
  }
  function handleSearch() {
    const found = destinations.find(
      (d) => d.title.toLowerCase() === query.toLowerCase(),
    );
    if (found) navigate(`/destinations/${found.slug}`);
  }

  return (
    <>
      <h1 className=" title pt-10">Find Your Next Amazing Adventure</h1>
      <div className="flex flex-col md:flex-row justify-center w-full gap-2">
        <input
          type="text"
          name="origin"
          className="input-search"
          placeholder="Origin"
          required
        />

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleDestinationSuggestions}
            className="input-search"
            placeholder="Destination"
            required
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-base-200 w-full rounded-xl mt-1 shadow-lg">
              {suggestions.map((d) => (
                <li
                  key={d.id}
                  onClick={() => handleSelect(d)}
                  className="px-4 py-2 hover:bg-base-300 cursor-pointer text-left"
                >
                  {d.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input type="date" name="date" className="input-search" />
        <input type="date" name="date" className="input-search" />
        <button onClick={handleSearch} className="btn btn-outline nav-style">
          Search
        </button>
      </div>
    </>
  );
}
