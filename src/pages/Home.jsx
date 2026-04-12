import SearchBar from "../components/HomeSubPages/SearchBar";
import WhyBookWithUs from "../components/HomeSubPages/WhyBookWithUs";
import PopularDestinations from "../components/HomeSubPages/PopularDestinations";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 text-center px-8 max-w-7xl mx-auto w-full">
      <SearchBar />
      <WhyBookWithUs />
      <PopularDestinations />
    </div>
  );
}
