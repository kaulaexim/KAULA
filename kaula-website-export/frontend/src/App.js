import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PorcelainSlabs from "./pages/PorcelainSlabs";
import StoneVeneers from "./pages/StoneVeneers";
import KitchenSinks from "./pages/KitchenSinks";
import SanitaryWare from "./pages/SanitaryWare";
import WhyKaula from "./pages/WhyKaula";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/porcelain-slabs" element={<PorcelainSlabs />} />
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
    </HelmetProvider>
  );
}

export default App;
