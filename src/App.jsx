import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DestinationDetail from "./pages/DestinationDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
