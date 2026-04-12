import AboutHero from "../components/AboutPages/AboutHero";
import OurGoals from "../components/AboutPages/OurGoals";
import WhyTravelWithUs from "../components/AboutPages/WhyTravelWithUs";

export default function About() {
  return (
    <div className="flex flex-col  text-center gap-5 ">
      <AboutHero />
      <WhyTravelWithUs />
      <OurGoals />
    </div>
  );
}
