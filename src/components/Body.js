import React from "react";
import Externals from "./Externals";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";

function body() {
  return (
    <div className="row">
      <Navigation />
      <Externals />
      <Hero />
      <Footer />
    </div>
  );
}

export default body;
