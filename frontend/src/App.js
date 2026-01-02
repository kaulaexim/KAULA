import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CeramicSlabs from "./pages/CeramicSlabs";
import KitchenSinks from "./pages/KitchenSinks";
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
            <Route path="/kitchen-sinks" element={<KitchenSinks />} />
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
