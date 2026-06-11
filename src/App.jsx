import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ProductDetails from "./components/ProductDetails";
import OrderForm from "./components/OrderForm";
import ReturnPolicy from "./components/ReturnPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <Gallery />

      {/* Product Details */}
      <ProductDetails />

      {/* Order Form */}
      <section id="order">
        <OrderForm />
      </section>

      {/* Return Policy */}
      <ReturnPolicy />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;