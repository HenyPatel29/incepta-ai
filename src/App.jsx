import { useState } from "react";
import { Routes, Route } from "react-router-dom";

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

function App() {

const [showAssistant, setShowAssistant] = useState(false);

return (

<div className="app">

<Navbar toggleAssistant={() => setShowAssistant(!showAssistant)} />

{showAssistant && (
  <AIAssistant
    closeAssistant={() => setShowAssistant(false)}
  />
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

<Route
path="/rings"
element={<Rings />}
/>

<Route
path="/earrings"
element={<Earrings />}
/>

<Route
path="/bracelets"
element={<Bracelets />}
/>

<Route
path="/pendants"
element={<Pendants />}
/>

<Route
path="/necklaces"
element={<Necklaces />}
/>

<Route
path="/about"
element={<About />}
/>

</Routes>

<Footer />

</div>

);
}

export default App;