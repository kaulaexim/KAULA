import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CeramicSlabs from "./pages/CeramicSlabs";
import StoneVeneers from "./pages/StoneVeneers";
import KitchenSinks from "./pages/KitchenSinks";
import SanitaryWare from "./pages/SanitaryWare";
import WhyKaula from "./pages/WhyKaula";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ceramic-slabs" element={<CeramicSlabs />} />
            <Route path="/stone-veneers" element={<StoneVeneers />} />
            <Route path="/kitchen-sinks" element={<KitchenSinks />} />
            <Route path="/sanitary-ware" element={<SanitaryWare />} />
            <Route path="/why-kaula" element={<WhyKaula />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
