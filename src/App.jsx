import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import AIAssistant from "./components/AIAssistant";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

import Rings from "./pages/Rings";
import Earrings from "./pages/Earrings";
import Bracelets from "./pages/Bracelets";
import Pendants from "./pages/Pendants";
import Necklaces from "./pages/Necklaces";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";

function App() {

  const [showAssistant, setShowAssistant] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">

      <Navbar toggleAssistant={() => setShowAssistant(!showAssistant)} />

      {showAssistant && (
        <AIAssistant closeAssistant={() => setShowAssistant(false)} />
      )}

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Featured />
            </>
          }
        />

        <Route path="/rings" element={<Rings />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/pendants" element={<Pendants />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;